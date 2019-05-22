export function getTaskData(){
    const taskCardData = [
        {
            title: "Add Taskcard",
            id: 1,
            priority: "1",
            desc: "Add task into to do list",
            complete: false
        },
        {
            title: "Delete Taskcard",
            id: 2,
            priority: "2",
            desc: "Remove task from to do list",
            complete: true
        },
        {
          title: "Set Priority",
          id: 3,
          priority: "4",
          desc: "Add Priority feature into to do list",
          complete: false
      },
      ] 
    return(taskCardData)
}