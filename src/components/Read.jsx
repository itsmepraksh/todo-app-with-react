import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../context/DataContext";

const Read = ( ) => {
  const { todos, settodos } = useContext(Context)

  const newtask = todos.map((e) => {
    return (
      <div key={e.id} className="item flex justify-around items-center  py-3">
        <p
          className={`text-2xl truncate overflow-hidden whitespace-nowrap w-42 ${
            e.isComplete ? "line-through text-gray-400" : ""
          }`}
        >
          <input
            className="m-2 h-4 w-4"
            type="checkbox"
            onChange={(elem) => {
              tickbox(elem, e.id);
            }}
          />
          {e.title}
        </p>
        <FontAwesomeIcon
          onClick={() => deleteHandler(e.id)}
          
          icon={faTrash}
          className="active:scale-[0.9] "
        />
      </div>
    );
  });

  const deleteHandler = (delTask) => {
    const newtodos = todos.filter((elem) => {
      return elem.id !== delTask;
    });

    settodos(newtodos);
  };

    const tickbox = (e,id)=>{ 
    // console.log(e.target.checked,id)
    // let tickdata = [...todos]
    
    const ticktodos = todos.map((itask)=>{
      if(itask.id == id){
        return {...itask, isComplete:e.target.checked}
      }
      return itask;
    });

    settodos(ticktodos)
  }

  return (
    <>
      <div className="list overflow-y-auto py-2 hide-scrollbar w-full h-[100px] my-2 mb-4">
        {todos.length === 0 ? (
          <small className="text-gray-400 ">no task yet...</small>
        ) : (
          newtask
        )}
      </div>
    </>
  );
};

export default Read;
