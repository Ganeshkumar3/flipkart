let Student = {
    name: "kumar",
    age: 22,
    marks: [100, 100, 100, 100, 100],
    stumark: function() {
        console.log(this.name);
        console.log(this.age)
        console.log(Student.age)
        console.log(this.marks[0] + this.marks[1]+this.marks[2]+this.marks[3]+this.marks[4]);
    },
    detail:()=>{
        console.log(this.name);
        console.log(this.age)
    }
};

Student.stumark();
Student.detail();