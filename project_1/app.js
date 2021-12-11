new Vue({
    el: "#app",
    data: {
        title: "Vue Basics",
        cars: ['Toyota', 'Ford', 'Hyundai'], //Array
        robot: {
            name: "Sophia",
            age: 5,
            country: 'Saudi Arabian'
        } , //Object
        greetings: ()=>{
            return "Hi, greetings from Reza";
        }
    }
});