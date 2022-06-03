const note = new Vue({
    el: "#note",
    data:{
        notecontent: '',
        activo: true
    },
    methods:{
        estado()
        {
            activo:false,
            console.log("click")
            
        }
    }
})