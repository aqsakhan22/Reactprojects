import { cleanup } from "@testing-library/react";
import React,{useState,useEffect} from "react";
import App from "../App";
import img from "../images/todo.png";

const getLocation=()=>{
    let list=localStorage.getItem('lists');
    console.log(list)
    
  
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return []
    }
}
const Todo = () => {
    const [inputData,setinputData]=useState("")
    // const [items,setitems]=useState([])
    const [items,setitems]=useState(getLocation())


    const[toggle,settoggle]=useState(true);
    
    const[isedit,setisedit]=useState(null);

    
    const addItem=()=>{
        if(!inputData){
            alert("fill plz")

        }

        else if(inputData && !toggle){
            setitems(
                items.map((elem)=>{
                    if(elem.id == isedit){
                        return {...items,name:inputData}
                    }
                    return elem
                })
            )
            settoggle(true);
            setinputData('')
            setisedit(null)
        }
    else{
        const allinput={id:new Date().getTime().toString(),name:inputData}
       
        setitems([...items,allinput])
        setinputData(items)
        setinputData('')
    }

    }

    const delItem=(delid)=>{
        console.log(delid)
        const updateditems=items.filter((value)=>{
            return delid != value.id
        })
        console.log(updateditems)
        setitems(updateditems)

    }
    const editItem=(id)=>{

        let newEditItem=items.find((elem)=>
       
        {
            return  elem.id==id
        }
        )
       
        settoggle(false)
        setinputData(newEditItem.name)
        setisedit(id)

      
    }

    const removeall=()=>{
        setitems([])
    }
    useEffect(()=>{
      localStorage.setItem('lists',JSON.stringify(items))   //localstoorage may data sring format may huga save tbhi convert kiya
    },[items]) //jub bhi items ki value change hugi tab huga 
    
    // useEffect(()=>{
    //     localStorage.setItem('lists',JSON.stringify(items))
       

    // },[items])

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src={img} />
          <figcaption>Add your list here</figcaption>
        </figure>
        <div className="addItems">
          <input type="text" id="" placeholder="add text" 
          
          onChange={(e)=>setinputData(e.target.value)}
          value={inputData}
          />
          {toggle ?
        <i className="fa fa-plus add-btn" onClick={addItem}></i> 
          
          :
             <i className="fa fa-edit add-btn" onClick={addItem}></i>
          
          }
         
        </div>

        <div className="showItems">
        
              {items.map((value)=>{
                  
                  return(
                    <div className="eachItem" key={value.id}>
                    <h3>{value.name}</h3>
                    <div className="todo-btn">
                    <i className="fa fa-edit del-btn" onClick={()=>editItem(value.id)}></i>
                    <i className="fa fa-trash-alt del-btn" onClick={()=>delItem(value.id)}></i>
                    </div>
                    </div>
                  )

              })}
            
            
           
         
        </div>

        <div className="showItems">
         <button className="btn effect04 btn" data-sm-link-text="Remove all" onClick={removeall}><span>checklist</span></button>
          
        </div>
      </div>
    </div>
  );
};

export default Todo;
