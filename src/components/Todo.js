import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
   LeadingActions,
   SwipeableList,
   SwipeableListItem,
   SwipeAction,
   TrailingActions,
} from 'react-swipeable-list';

const Todo = ({ todos, todo, setTodos }) => {
   const [isEditing, setIsEditing] = useState(false);
   const ref = useRef(null);
   const swipeConfig = {
      delta: 20,
      preventDefaultTouchmoveEvent: false,
      trackTouch: true,
      trackMouse: false,
      rotationAngle: 0,
   };
   const swipeHandler = useSwipeable({
      onSwipedRight: (e) => deleteHandler(),
      onSwipedLeft: (e) => completeHandler(),
      ...swipeConfig,
   });

   useEffect(() => {
      if (ref.current) {
         const handleOutsideClick = (e) => {
            if (e.target !== ref.current && isEditing) {
               setIsEditing(!isEditing);
            }
         };
         window.addEventListener('click', handleOutsideClick);
         return () => window.removeEventListener('click', handleOutsideClick);
      }
   });

   const deleteHandler = () => {
      setTodos(todos.filter((item) => item.id !== todo.id));
   };
   const completeHandler = () => {
      setTodos(
         todos.map((item) => {
            if (item.id === todo.id)
               return { ...item, completed: !item.completed };
            return item;
         })
      );
   };

   const editHandler = (e) => {
      if (isEditing) {
         todo.text = e.target.value;
      }
      setTodos([...todos]);
   };

   const leadingActions = () => (
      <LeadingActions>
         <SwipeAction
            onClick={() => completeHandler()}
            destructiveCallbackDelay={0}
         >
            <div className="invisible">complete</div>
         </SwipeAction>
      </LeadingActions>
   );

   const trailingActions = () => (
      <TrailingActions>
         <SwipeAction
            onClick={() => deleteHandler()}
            destructiveCallbackDelay={0}
         >
            <div className="invisible">delete</div>
         </SwipeAction>
      </TrailingActions>
   );

   return (
      <div className="todo">
         <SwipeableList style={{ width: '100%' }}>
            <SwipeableListItem
               leadingActions={leadingActions()}
               trailingActions={trailingActions()}
               blockSwipe={window.innerWidth >= 768}
            >
               <div className="todo-check">
                  <textarea
                     className={`todo-edit-input ${
                        isEditing ? 'visible' : 'invisible'
                     }`}
                     defaultValue={`${isEditing ? todo.text : ''}`}
                     onChange={editHandler}
                     onKeyDown={(e) => {
                        if (e.key === 'Escape') setIsEditing(!isEditing);
                     }}
                     ref={ref}
                  />
                  <li
                     onClick={(e) => {
                        setIsEditing(!isEditing);
                        editHandler(e);
                     }}
                     {...swipeHandler}
                     className={`todo-item ${
                        todo.completed ? 'completed' : ''
                     } ${isEditing ? 'invisible' : 'visible'}`}
                  >
                     {todo.text}
                  </li>
               </div>
            </SwipeableListItem>
         </SwipeableList>
         {window.innerWidth <= 768 ? null : (
            <button onClick={deleteHandler} className="todo-delete-btn">
               Delete
            </button>
         )}
      </div>
   );
};

export default Todo;
