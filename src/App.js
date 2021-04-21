
import React, { useContext, useState } from "react";

import "./styles.css";

const EventValue = React.createContext();
const PeopleValue = React.createContext();

function Event({ setvisible, setChange }) {
  const handleChange = (e) => {
    setChange(e.target.value);
  };
  return (
    <div>
      Event Page
      <div>
        Name : <input type="text" onChange={handleChange} />
      </div>
      <button onClick={() => setvisible(true)} style={{ marginTop: 10 }}>
        Next
      </button>
    </div>
  );
}

function People({
  setChangePeople,
  setvisible,
  setvalid
}) {
  const handleChange = (e) => {
    setChangePeople(e.target.value);
  };
  return (
    <div>
      People Page
      <div>
        Name : <input type="text" onChange={handleChange} />
      </div>
      <div>
        <button style={{ marginTop: 10 }} onClick={() => setvisible(false)}>
          Back
        </button>
        <button onClick={() => setvalid(true)} style={{ marginTop: 10 }}>
          Submit
        </button>
      </div>
    </div>
  );
}

function Vendor({
  changePeople,
  setvisible,
  visible,
  setChange,
  change
}) {
  const EventCont = useContext(EventValue);
  const PeopleCont = useContext(PeopleValue);
  console.log(EventCont);
  const [valid, setvalid] = useState(false);
  return (
    <>
      {valid === true ? (
        <>
          <h1>{EventCont}</h1>
          <h1>{PeopleCont}</h1>
        </>
      ) : (
        <>
          {visible === true ? (
            <People
              changePeople={changePeople}
              setChangePeople={setChange}
              setvisible={setvisible}
              setvalid={setvalid}
            />
          ) : (
            <Event
              setvisible={setvisible}
              change={change}
              setChange={setChange}
              
            />
          )}
        </>
      )}
    </>
  );
}

export default function App() {
  const [visible, setvisible] = useState(false);
  const [change, setChange] = useState();
  const [changePeople, setChangePeople] = useState();
  return (
    <>
    <PeopleValue.Provider value={changePeople}>
    <EventValue.Provider value={change}>
      
        <div className="App">
          <Vendor
            change={change}
            setChange={setChange}
            setvisible={setvisible}
            changePeople={changePeople}
            setChangePeople={setChangePeople}
            visible={visible}
          />
        </div>
    </EventValue.Provider>
    </PeopleValue.Provider>
    </>
  );
}

