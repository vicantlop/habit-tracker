import AddHabits from "./AddHabits";
import DateBar from "./DateBar";

const Dashboard = () => {
  console.log(new Date().getMonth().toString())
  return (
    <div className="Dashboard">
      <DateBar />
      {/* <div className="habit">
        <div className="cell">
          monday
        </div>
        <div className="cell">
          box
        </div>
        <div className="cell">
          box
        </div>
        <div className="cell">
          box
        </div>
        <div className="cell">
          box
        </div>
        <div className="cell">
          box
        </div>
        <div className="cell">
          box
        </div>
      </div> */}
      {/* <div className="noHabits">
      It looks like you currently have no habits to track. Please click below to create your habit.
      </div>
      <AddHabits /> */}
    </div>
  );
};

export default Dashboard;
