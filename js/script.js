const {createApp} = Vue;
createApp({
    data(){
        return{
            todoList: [
                {
                    text: "Comprare le scarpe",
                    done: false
                },
                {
                    text: "Fare l bucato",
                    done: false
                },
                {
                    text: "Cantare",
                    done: false
                }
            ],
            inserList: "",
        }
    },
    methods: {
        isDone: function(index){
            if(this.todoList[index].done === false){
                this.todoList[index].done = true
            } else if(this.todoList[index].done === true){
                this.todoList[index].done = false;
            }
        },
        addText: function(){
            if(this.inserList){
                this.todoList.push({text:this.inserList, done:false});
                this.inserList="";
            }
        },
        removeInList: function(indexOfList){
            this.todoList.splice(indexOfList, 1);
        },
        
        
    }
}).mount("#app");