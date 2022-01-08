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
        },   //function
        profile_img_src: './reza_new_300_300.png',
        img_alt : 'No image found',
    },
    methods: {
        testFunction(){
            return this.robot.name;
        }
    }
});