import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import "./CompletedTasks.css";
import TaskItem from "../../../Components/TaskItem.js/TaskItem";
import {
  addTasks,
  completeTasks,
  removeTasks,
  updateTasks,
} from "../../../redux/reducer";
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
const CompletedTasks = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [sort, setSort] = useState("completed");
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
        Completed Tasks
      </motion.h1>
      <ul>
        <AnimatePresence>
          {/* My all tasks */}
          {props.tasks.length > 0 && sort === "completed" ? (
            props.tasks.map((item) => {
              return (
                item.completed === true && (
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
            <h3>No Task Completed. Please Complete a task from "My Task".</h3>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks);
