export class Excel {
    constructor(selector, options){
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    render(){
        console.log(this.$el)
    }
}