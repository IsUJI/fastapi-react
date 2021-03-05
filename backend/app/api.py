from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

todos = [
    {
        "id": "1",
        "item": "Read some books."
    },
    {
        "id": "2",
        "item": "Sleep until noon."
    }
]

@app.get("/", tags = ["rooot"])
async def read_root() -> str:
    return "Welcome to your TODO list"

@app.get("/todos", tags=["todos"])
async def get_todos():
    return todos

@app.get("/todos/{id}", tags=["todos"])
async def get_todo(id: int):
    for todo in todos:
        if int(todo["id"]) == id:
            return todo
    raise HTTPException(status_code=404, detail=f"Todo with id {id} not found.")

@app.post("/todos", tags=["todos"], status_code=201)
async def add_todo(item: str):
    id = len(todos) + 1 
    todo = {"id": str(id),
            "item": item}
    todos.append(todo)
    return todo

@app.put("/todos/{id}", tags=["todos"])
async def update_todo(id: int, item: str):
    for todo in todos:
        if int(todo["id"]) == id:
            todo["item"] = item
            return f"Todo with id {id} has been updated."
    raise HTTPException(status_code=404, detail=f"Todo with id {id} not found.")  

@app.delete("/todos/{id}", tags=["todos"])
async def delete_todo(id: int):
    for todo in todos:
        if int(todo["id"]) == id:
            todos.remove(todo)
            return f"Todo with id {id} has been removed."

    raise HTTPException(status_code=404, detail=f"Todo with id {id} not found.")