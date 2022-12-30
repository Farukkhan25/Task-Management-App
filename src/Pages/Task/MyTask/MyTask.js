import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from 'react';
import "./MyTask.css";
import TaskItem from '../../../Components/TaskItem.js/TaskItem';
import { addTasks, completeTasks, removeTasks, updateTasks } from '../../../redux/reducer';
import { connect } from "react-redux";
import { themeContext } from "../../../contexts/Context";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
    removeTask: (id) => dispatch(removeTasks(id)),
    updateTask: (obj) => dispatch(updateTasks(obj)),
    completeTask: (id) => dispatch(completeTasks(id)),
  };
};
const MyTask = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
      const [sort, setSort] = useState("active");
    return (
      <div
        className="displaytasks"
        style={
          darkMode
            ? { backgroundColor: "#1e384e" }
            : { backgroundColor: "#7465B7" }
        }
      >
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          //    className="inline text-center mb-4 bg-[#e1ebfd]
        >
          My Tasks
        </motion.h1>
        <ul>
          <AnimatePresence>
            {/* My active tasks */}
            {props.tasks.length > 0 && sort === "active" ? (
              props.tasks.map((item) => {
                return (
                  item.completed === false && (
                    <TaskItem
                      key={item.id}
                      item={item}
                      removeTask={props.removeTask}
                      updateTask={props.updateTask}
                      completeTask={props.completeTask}
                    />
                  )
                );
              })
            ) : (
              <h3>No Active Task Available. Please add new task.</h3>
            )}
          </AnimatePresence>
        </ul>
      </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTask);