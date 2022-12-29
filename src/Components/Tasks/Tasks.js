import React, { useState } from "react";
import "./Tasks.css";
import { connect } from "react-redux";
import { addTasks } from "../../redux/reducer";
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";
import { toast } from "react-hot-toast";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
  };
};

const Tasks = (props) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const add = () => {
    if (task === "") {
      alert("Input is Empty");
    } else {
      props.addTask({
        id: Math.floor(Math.random() * 1000),
        item: task,
        completed: false,
      })      
      toast.success("Task Added successfully !");
      setTask("");      
    }
  };
  //console.log("props from store", props);
  return (
    <div className="addTasks">
      
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="task-input"
        value={task}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
