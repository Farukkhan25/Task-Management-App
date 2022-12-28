import React from "react";
import Tasks from "../../../Components/Tasks/Tasks";
import { motion } from "framer-motion";
import "./AddTask.css";

const AddTask = () => {
  return (
    <div className="AddTask py-8">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        //    className="inline text-center mb-4 bg-[#e1ebfd]
      >
        Add a New Task
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Tasks />
        {/* <DisplayTodos /> */}
      </motion.div>
    </div>
  );
};

export default AddTask;
