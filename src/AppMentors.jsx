import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';
export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶으신가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶으신가요?`);
    dispatch({ type: 'updated', prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`추가하고 싶은 멘토의 이름은 무엇인가요?`);
    const title = prompt(`추가하고싶은 멘토의 직업은 무엇인가요?`);

    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`삭제하고 싶은 멘토의 이름은 무엇인가요?`);

    dispatch({ type: 'updated', name });
  };

  return (
    <div>
      <div>
        {person.name}은 {person.age}이고 {person.title}이다.
      </div>

      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => handleUpdate}>
        멘토 이름 바꾸기
      </button>
      <button type="button" onClick={() => handleAdd}>
        멘토 더하기
      </button>
      <button type="button" onClick={() => handleDelete}>
        멘토 삭제
      </button>
    </div>
  );
}

const initialPerson = {
  name: 'yujin',
  age: 25,
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '백엔드개발자',
    },
    {
      name: '제임스',
      title: '프론트엔드개발자',
    },
  ],
};
