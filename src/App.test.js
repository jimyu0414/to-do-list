import React from 'react';
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';
import {render, cleanup} from 'react-testing-library';
import App from './App';
import ToggleableTaskCardForm from './components/ToDoList';
import TaskCard from './components/TaskCard';


afterEach(cleanup)

describe('The main app' , () =>{
  it('App renders without crashing', () => {
    render(<App />);
  });
  
})

/* 
  Test Task Card Form Component
*/
const card ={
  title: "Task 001 Add task",
  id: 1,
  key: 1,
  priority: 1,
  desc: "Add task into to do list",
  complete: false
}

it('delete card', ()=>{
  const {getByTestId, getByText} = render(<TaskCard 
    key={card.id}
    id={card.id}
    title={card.title}
    priority={card.priority}
    desc={card.desc}
    complete={card.complete} 
/>);
  expect(getByTestId('testTaskCardDelete')).toBeDefined();
});

it('complete card', ()=>{
  const {getByTestId, getByText} = render(<TaskCard 
    key={card.id}
    id={card.id}
    title={card.title}
    priority={card.priority}
    desc={card.desc}
    complete={card.complete} 
/>);
  expect(getByTestId('testTaskCardComplete')).toBeDefined();
});

/* 
  Test Toggleable Task Card Form Component
*/
