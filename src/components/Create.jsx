 
import { nanoid } from "nanoid";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../context/DataContext";
const Create = () => {

    const {todos,settodos} = useContext(Context)
    

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
    
  const submitHandler = (data) => {
    data.isComplete = false;
    data.id = nanoid();

    // console.log(data);
    reset();

    let copydata = [...todos];
    copydata.push(data);
    settodos(copydata);
  };
  return (
    <>
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
    </>
  )
}

export default Create