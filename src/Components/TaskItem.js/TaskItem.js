import { motion } from "framer-motion";
import React, { useRef } from "react";
import "./TaskItem.css";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const TaskItem = (props) => {
  const { item,  updateTask, removeTask, completeTask } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTask({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="taskCard"
    >
    
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}
          <AiFillEdit />{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completeTask(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTask(item.id)}
        >
          {" "}
          <IoClose />
        </motion.button>{" "}
        {
          item.completed && (
            <div className=" p-0 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">
              <Link to="/myTask">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ fontSize: "15px" }}
                  //   onClick={() => notCompleteTasks(item.id)}
                >
                  Not Completed
                </motion.button>
              </Link>
            </div>
          )
          //   <span className="completed">Completed</span>
        }
      </div>
    </motion.li>
  );
};

export default TaskItem;
