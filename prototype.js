class Todolist {

    constructor(id,task){
        this.id = id;
        this.task = task;
    }

    setask(task) {
        if (task == null || task == "") {
            console.error("Cannot add empty task or delete the task from list");
            return;
        }
        this.task = task;
    }


}

let td1 = new Todolist("This is the first taks");
console.log(td1.task);
td1.setask("");
console.log(td1.task);