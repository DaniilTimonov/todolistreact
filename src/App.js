import { useState } from "react"; //импортируем хук usestate 
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]); // создаем хук для отслеживания состояния массива todos для последующего добавлениям в него элементов  
  const [todo , setTodo] = useState(""); // создаем состояниие todo (функция getter, отображает текущее значение ), setTodo  метод (функция setter, обновляющее состояние)

  const addTodo = () => { //функция для добавления элемента todo в массив todos
    if (todo !== "") {  // создание условной конструкции, которая проверяет, чтобы значение не было пустым
      setTodos([...todos, todo]);
      setTodo(""); //очищает поле ввода после добавления в список Todos
    }
  };

  const deleteTodo = (text) => { //функция для удаления элемента списка
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  
 
  
  const showeditform = () => { //функция для отображения формы редактирования
 document.getElementsByClassName("edit-wrapper")[0].style.visibility ="visible";

    
  };


  return (
   
    <div className="App">
      <h1>Задачи для выполнения</h1>

      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Создать задачу"
          onChange={(e) => { //обработчик событий onChange срабатывает каждый раз когда значение поля изменяется
            setTodo(e.target.value); /* setter - функция присоединяется к обработчику событий  , используя обьект event*/
          }}
        />
        <button className="add-button" onClick={addTodo}> {/* передаем функцию addTodo в обработчик onclick */} 
          добавить
        </button>
      </div>

      {todos?.length > 0 ? (
        <ol className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo}  {/* создание кнопки редактирования */}</li>
              
             
              <div className="edit-wrapper"> {/* обертка для формы редактирования */}
              <input //инпут для редактирования
              type="text"
              className="editinput"
              />
              <button
              className="okbutton"
              
              >ok</button>
              </div>
              <button //создание кнопки редактирования
               onClick={() => {
                showeditform(todo) ;    
                 } }>2</button>
              <button //создание кнопки удаления
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo);
                }}
              >
                Удалить
              </button>
        
              
            </div>
          ))}
        </ol>
      ) : (
        <div className="empty">
          <p>Задачи отсутствуют</p>
        </div>
      )}
    </div>
  );
};

export default App;