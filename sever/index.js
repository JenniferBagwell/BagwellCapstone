const path = require("path");
const FileSync = require("lowdb/adapters/FileSync");
const lodashId = require("lodash-id");
const lowdb = require("lowdb");

const http = require("http");

const PORT = 4040;

const server = http.createServer((request, response) => {
  if (request.url.startsWith("/posts")) {
    const server = http.createServer((request, response) => {
      // set the content type for our response
      response.setHeader("Content-Type", "application/json");

      if (request.url.startsWith("/posts")) {
        // use the request method to access the corresponding handler
        const handler = HANDLERS[request.method];

        // if the handler function exists,
        if (handler) {
          // handle the request and response
          handler(request, response);
        } else {
          // if request method not found in the HANDLERS object,
          notFound(response);
        }
      } else {
        // if request url doesn't start with "/posts",
        notFound(response);
      }
    });

server.listen(PORT);
console.log(`Listening on port ${PORT}`);

const HANDLERS = {
  GET(request, response) {
    // get "posts" collection
    const posts = db.get("posts");
    // send ok response with posts data
    ok(response, { posts: posts.value() })
  }
}

    const internalServerError = (response) => {
      response.writeHead(500);
      response.write(JSON.stringify({ message: "Internal Server Error" }));
      response.end();
    };

    const ok = (response, payload) => {
      response.writeHead(200);
      response.write(JSON.stringify(payload));
      response.end();
};

const HANDLERS = {
  POST(request, response) {
    // construct contents of request data
    let contents = ""
    request.on("data", (chunk) => (contents += chunk));

    request.on("end", () => {
      // create/write new post in the db
      const post = db.get("posts").insert({ body: contents }).write();
      // send ok response with constructed post data
      ok(response, post);
    });

    // use internal server error response if error interrupts request
    request.on("error", () => internalServerError(response));
  }
}
const HANDLERS {
  PATCH(request, response) {
    const parts = request.url.split("/");

    // as before, we can search the URL for an id...
    if (parts.length === 3) {
      // ...and construct the contents of the request data
      let contents = "";
      request.on("data", (chunk) => (contents += chunk));

      request.on("end", () => {
        const id = parts.pop();

        // updateById returns a post only if one already exists with that ID
        const post = db.get("posts").updateById(id, { body: contents }).write();

        if (post) {
          ok(response, post);
        } else {
          notFound(response);
        }
      });

      request.on("error", () => internalServerError(response));
    } else {
      notFound(response);
    }
  },
}
const HANDLERS {
  DELETE(request, response) {
    const parts = request.url.split("/");

    if (parts.length === 3) {
      const id = parts.pop();
      // like updateById, removeById will only return a post if a post exists with that ID
      const post = db.get("posts").removeById(id).write();

      if (post) {
        ok(response, post);
      } else {
        notFound(response);
      }
    } else {
      notFound(response);
    }
  },
}

// use FileSync to create an adapter linked to a .json file
const adapter = new FileSync(path.join(__dirname, "db.json"));
// create a lowdb database and link it to the .json file
const db = lowdb(adapter);
// utilize lodashId to auto-generate unique IDs for our db entries
db._.mixin(lodashId);
// create a collection for blog posts and write it to the db
db.defaults({ posts: [] }).write();
