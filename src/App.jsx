import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const [todos, settodos] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const newtask = todos.map((e) => {
    return (
      <div key={e.id} className="item flex justify-around items-center  py-3">
        <p className={`text-2xl truncate overflow-hidden whitespace-nowrap w-42 ${e.isComplete?"line-through text-gray-400":""}`}>
          <input className="m-2 h-4 w-4" type="checkbox" onChange={(elem)=>{tickbox(elem,e.id)}} />
          {e.title}
        </p>
        <FontAwesomeIcon
          onClick={() => deleteHandler(e.id)}x
          icon={faTrash}
          className="active:scale-[0.9] "
        />
      </div>
    );
  });

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

  console.log(todos)
 

  const deleteHandler = (delTask) => {
    const newtodos = todos.filter((elem) => {
      return elem.id !== delTask;
    });

    settodos(newtodos);
  };

  const submitHandler = (data) => {
    data.isComplete = false;
    data.id = nanoid();

    console.log(data);
    reset();

    let copydata = [...todos];
    copydata.push(data);
    settodos(copydata);
  };

  return (
    <div className="h-screen w-screen  bg-[url(https://images.unsplash.com/photo-1708588421520-73a1a6a16fd0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-white p-10 relative bg-center bg-cover">
      <div className="cover  border-gray-300 border-[2px] rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 ">
        <h1 className="text-2xl font-semibold text-center">To dO LiSt</h1>

        <div className="list  py-10 w-full">
          {todos.length === 0 ? (
            <small className="text-gray-400">no task yet...</small>
          ) : (
            newtask
          )}
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="  flex flex-col justify-center items-center gap-4"
        >
          <input
            {...register("title", { required: "title cannot be empty" })}
            type="text"
            placeholder="taskname"
            className="bg-zinc-900 p-2 rounded-lg outline-none"
          />
          <small>{errors?.title?.message}</small>
          <button className="outline-none text-2xl">
            {" "}
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
