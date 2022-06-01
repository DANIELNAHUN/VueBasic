const note = new Vue({
    el: "#note",
    data:{
        notecontent: 'yaoki',
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