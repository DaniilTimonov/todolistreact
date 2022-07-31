import { useState } from "react"; //импортируем хук usestate 
import { ImPencil2 } from 'react-icons/im';
import "./App.css";

const App = () => {
  
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]); // создаем хук для отслеживания состояния массива todos для последующего добавлениям в него элементов  
  const [todo, setTodo] = useState({}); // создаем состояниие todo (функция getter, отображает текущее значение ), setTodo  метод (функция setter, обновляющее состояние)

  const addTodo = () => { //функция для добавления элемента todo в массив todos
    
    if (todo.length) {  // создание условной конструкции, которая проверяет, чтобы значение не было пустым
      
      setTodos([...todos, { text: todo, id: id }]);
      /*   setTodos([...todos, todo]); */
      setId(id + 1);
      setTodo({ text: ""}); //очищает поле ввода после добавления в список Todos
        
    }
    
  };

  const editinput = () => {
    
  }

  const deleteTodo = (text) => { //функция для удаления элемента списка
    console.log(todos);
    const newTodos = todos.filter((todo_elem) => {
      return todo_elem.text !== text;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };
  const updateTodo = (event, todo) => {
    console.log(event, todo);
  }
  const showeditform = (className) => { //функция для отображения формы редактирования
    document.getElementsByClassName(className)[0].style.display = "flex";
    console.log(className);
  };



  return (

    <div className="App">
      <h1>Лист задач</h1>

      <div className="input-wrapper">
        <input
          className="input-creator"
          type="text"
          name="todo"
          value={todo.text} //привязка нужна для очистки значение value
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

            <li className="li-toadd" key={todo.id}> {todo.text}  {/* создание кнопки редактирования */}

              <div className={`edit-wrapper item-${todo.id}`}> {/* обертка для формы редактирования */}
                <input //инпут для редактирования
                  type="text"
                  className="edit-input"
                  defaultValue={todo.text}
                  onChange={(e) => { //обработчик событий onChange срабатывает каждый раз когда значение поля изменяется
                    updateTodo(e, todo);
                  }}
                />
                <button
                  className="ok-button"

                >ok</button>
              </div>
              <button //создание кнопки редактирования
                className="edit-button"
                onClick={() => {
                  showeditform(`item-${todo.id}`);
                }}><ImPencil2/></button>
              <button //создание кнопки удаления
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo.text);
                }}
              >
                Удалить
              </button>
            </li>
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