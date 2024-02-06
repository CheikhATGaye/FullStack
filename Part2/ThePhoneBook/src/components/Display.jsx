
const Display =(props)=>{
    return(
     <div>
     {props.name} {props.number}
     <button onClick={props.Delete}>delete</button>
     </div>
   )
  }
export default Display