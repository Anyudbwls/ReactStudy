import React, { useState } from 'react';

export default function AppMentors() {
  const [formState, setFromState] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶으신가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶으신가요?`);
    setFromState((person) => ({
      ...person,
      mentors: formState.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const currentName = prompt(`추가하고 싶은 멘토의 이름은 무엇인가요?`);
    const currentTitle = prompt(`추가하고싶은 멘토의 직업은 무엇인가요?`);

    setFromState((person) => ({
      ...person,
      mentors: [...person.mentors, { currentName, currentTitle }],
    }));
  };

  const handleDelete = () => {
    const currentName = prompt(`삭제하고 싶은 멘토의 이름은 무엇인가요?`);

    setFromState((person) => ({
      ...person,
      mentors: formState.mentors.filter((m) => m.name !== currentName),
    }));
  };

  return (
    <div>
      <div>
        {formState.name}은 {formState.age}이고 {formState.title}이다.
      </div>

      <ul>
        {formState.mentors.map((mentor, index) => (
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
