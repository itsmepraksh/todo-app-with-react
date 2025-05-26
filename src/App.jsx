 
import Create from "./components/Create";
import Read from "./components/Read"; 

const App = () => {


  return (
    <div className="h-screen w-screen  bg-[url(https://images.unsplash.com/photo-1708588421520-73a1a6a16fd0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-white p-10 relative bg-center bg-cover">

      <div className="cover h-[50%] border-gray-300 border-[2px] rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 ">
        <h1 className="text-2xl font-semibold text-center">To dO LiSt</h1>

        
        <Read/>
        <Create />
      </div>
    </div>
  );
};

export default App;
