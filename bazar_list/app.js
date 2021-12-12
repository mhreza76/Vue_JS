new Vue({
    el: "#app",
    data: {
        title: "Vue Basics",
        items: [
            {name: 'rice', price: 12.50},
            {name: 'wheat', price: 15.50},
            {name: 'oil', price: 22.50},
        ],
        newItem: '',
    },
    computed:{
        total() {
            var total = 0
            this.items.forEach(item => {
                total += parseFloat(item.price)
            })
            return total
        }
    },
    methods: {
        addItem() {
            this.items.push({
                name: this.newItem,
                price: 0.00
            })
            this.newItem = "";
        },
        removeItem(index) {
            this.items.splice(index, 1)
        }
    },
});