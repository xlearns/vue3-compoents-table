import { h } from "vue"

export default {
  props:{
    row:'',   //当前行得数据
    col:"",   //当前列得数据
    index:"", //当前是第几行
    render:"" //具体得render渲染内容
  },
  render(props:any){
    // console.log(props.row,props.col,props.index,props.render)
    // return h('h1',{},'hell world')
    let {row,col,index,render} = props
    let params = {
        row:row,
        col:col,
        index:index
    }
    return  render(h,params)
  }
}
