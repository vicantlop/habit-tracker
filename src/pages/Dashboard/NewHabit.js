import { useState } from "react";

const NewHabit = () => {
  const [habitName, setHabitName] = useState('')
  const [goal, setGoal] = useState({
    number: 1,
    type: 'times',
    repeat: 'perDay'
  })

  const handleChange = (event) => {
    event.preventDefault()
    switch(event.target.id) {
      case "goalNumber": 
        setGoal({...goal, number: parseInt(event.target.value)})
        break;
      case "goalType":
        setGoal({...goal, type: event.target.value})
        break;
      case "goalRepeat":
        setGoal({...goal, repeat: event.target.value})
        break;
      case "habitName":
        setHabitName(event.target.value)
        break;
      default:
        break;
    }
  }  

  return (
    <form action="" method="post">
      <div className="mb-3">
        <label htmlFor="habitName" className="form-label">
          Habit Name
        </label>
        <input
          type="text"
          className="form-control"
          id="habitName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="goalNumber" className="form-label">
          Goal
        </label>
        <input
          type="number"
          className="form-control"
          id="goalNumber"
          placeholder={1}
          min={1}
          onChange={handleChange}
        />
      </div>

      <select
        className="form-select form-select-sm mb-3"
        aria-label="small select example"
        id="goalType"
        onChange={handleChange}
      >
        <option value="times">
          {goal.number === 1 ? "Time" : "Times"}
        </option>
        <option value="minutes">{goal.number === 1 ? "Minute" : "Minutes"}</option>
      </select>

      <select
        className="form-select form-select-sm mb-3"
        aria-label="small select example"
        id="goalRepeat"
        onChange={handleChange}
      >
        <option value="perDay">Per Day</option>
        <option value="perWeek">Per Week</option>
        <option value="perMonth">Per Month</option>
      </select>
    </form>
  );
};

export default NewHabit;
