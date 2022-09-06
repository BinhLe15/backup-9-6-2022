import './App.css';
import { WebData } from './WebData';
import AppCalendar from './Calender';
import WebLayout from './Layout';
function Manage({
  eventManage,
  participantManage,
  roleManage
}) {
  return(
    <div>
      <p className="event-manage">{eventManage}</p>
      <p className="participant-manage">{participantManage}</p>
      <p className="role-manage" color={"#FFFFFF"}>{roleManage}</p>
    </div>
  )
}

function App() {
  // return <div>dasdasdas</div>;
  return WebData.map((webData)=>{
    return(
    <div>
      {/* <AppCalendar></AppCalendar> */}
      <Manage
        eventManage={webData.event_manage}
        participantManage={webData.participant_manage}
        roleManage={webData.role_manage}
      />
    </div>
    )})
}
// const App = () => {
//   return (
//     <div>
//       <span>
//         dassasd
//       </span>
//     </div>
//   )
// };

export default App;
