const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const sqlite = require("sqlite");
const dbConnection = sqlite.open("banco.sqlite", { Promise });

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extends: true }));

app.get("/", async (req, res) => {
  const db = await dbConnection;
  const categoriasDb = await db.all("select * from categorias;");
  const vagas = await db.all("select * from vagas");
  const categorias = categoriasDb.map(cat => {
    return {
      ...cat,
      vagas: vagas.filter(vaga => vaga.categoria === cat.id)
    };
  });
  res.render("home", {
    categorias,
    vagas
  });
});
app.get("/vaga/:id", async (req, res) => {
  console.log(req.params.id);
  const db = await dbConnection;
  const vaga = await db.get("select * from vagas where id =" + req.params.id);
  res.render("vaga", {
    vaga
  });
});

app.get("/admin", (req, res) => {
  res.render("admin/home");
});

app.get("/admin/vagas", async (req, res) => {
  const db = await dbConnection;
  const vagas = await db.all("select * from vagas");
  res.render("admin/vagas", {
    vagas
  });
});

app.get("/admin/vagas/delete/:id", async (req, res) => {
  const db = await dbConnection;
  await db.run("delete from vagas where id =" + req.params.id);
  res.redirect("/admin/vagas");
});

app.get("/admin/vagas/nova", async (req, res) => {
  const db = await dbConnection;
  const categorias = await db.all("select * from categorias");
  res.render("admin/nova-vaga", {
    categorias
  });
});

app.post("/admin/vagas/nova", async (req, res) => {
  const db = await dbConnection;
  const { titulo, descricao, categoria } = req.body;

  await db.run(
    `insert into vagas(categoria,titulo,descricao)values(${categoria},'${titulo}','${descricao}')`
  );
  res.redirect("/admin/vagas");
});

app.get("/admin/vagas/editar/:id", async (req, res) => {
  const db = await dbConnection;
  const categorias = await db.all("select * from categorias");
  const vaga = await db.get("select * from vagas where id = " + req.params.id);
  res.render("admin/editar-vaga", {
    categorias,
    vaga
  });
});

app.post("/admin/vagas/editar/:id", async (req, res) => {
  const db = await dbConnection;
  const { titulo, descricao, categoria } = req.body;
  const { id } = req.params;
  await db.run(
    `update vagas set categoria=${categoria}, titulo='${titulo}', descricao='${descricao}' where id = ${id}`
  );
  res.redirect("/admin/vagas");
});

app.get("/admin/categorias", async (req, res) => {
  const db = await dbConnection;
  const categorias = await db.all("select * from categorias");
  res.render("admin/categorias", { categorias });
});

app.get("/admin/categorias/nova", async (req, res) => {
  const db = await dbConnection;
  const categorias = await db.all("select * from categorias");
  res.render("admin/nova-categoria", {
    categorias
  });
});

app.post("/admin/categorias/nova", async (req, res) => {
  const db = await dbConnection;
  const { categoria } = req.body;

  await db.run(`insert into categorias(categoria)values('${categoria}')`);
  res.redirect("/admin/categorias");
});
// comment
app.get("/admin/categorias/delete/:id", async (req, res) => {
  const db = await dbConnection;
  await db.run("delete from categorias where id = " + req.params.id);
  res.redirect("/admin/categorias");
});

app.get("/admin/categorias/editar/:id", async (req, res) => {
  const db = await dbConnection;
  const categorias = await db.get(
    "select * from categorias where id = " + req.params.id
  );
  res.render("admin/editar-categoria", {
    categorias
  });
});

app.post("/admin/categorias/editar/:id", async (req, res) => {
  const db = await dbConnection;
  const { categoria } = req.body;
  const { id } = req.params;
  await db.run(
    `update categorias set categoria='${categoria}' where id = ${id}`
  );
  res.redirect("/admin/categorias");
});

const init = async () => {
  const db = await dbConnection;
  await db.run(
    "create table  if not exists categorias(id INTEGER PRIMARY KEY, categoria TEXT)"
  );
  await db.run(
    "create table  if not exists vagas(id INTEGER PRIMARY KEY, categoria INTEGER, titulo TEXT, descricao TEXT)"
  );
  //const categoria = "Daniel team";
  //await db.run(`insert into categorias(categoria)values('${categoria}')`);
  //const vaga = "Social Midias (San Francisco)";
  //const descricao = "Vaga para fullstack developer que fez o fullstack lab";
  //await db.run(
  //  `insert into vagas(categoria,titulo,descricao)values(2,'${vaga}','${descricao}')`
  //);
};
init();

app.listen(3000, err => {
  if (err) {
    console.log("Não foi possível iniciar o servidor.");
  } else {
    console.log("Servidor Jobify rodando...");
  }
});
