import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
    // console.log(data)
    return (
        <div
            id="tasklist"
            className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16">
            {data.tasks.map((elem, idx) => (
                <React.Fragment key={idx}>
                    {elem.active && <AcceptTask data={elem} />}
                    {elem.newTask && <NewTask data={elem} />}
                    {elem.completed && <CompleteTask data={elem} />}
                    {elem.failed && <FailedTask data={elem} />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default TaskList;
