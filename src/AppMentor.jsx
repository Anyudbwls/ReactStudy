import React, { useState } from 'react';

export default function AppMentor() {
  const [formState, setFromState] = useState({
    name: 'yujin',
    age: 25,
    title: '개발자',
    mentor: {
      name: '이듬',
      title: '시니어 개발자',
    },
  });

  return (
    <div>
      <div>
        {formState.name}은 {formState.age}이고 {formState.title}이다.
      </div>

      <div>
        {formState.name}의 멘토는 {formState.mentor.title}인 {formState.mentor.name}이다.
      </div>
      <button
        type="button"
        onClick={() => {
          const name = prompt(`${formState.name}의 멘토는?`);
          setFromState((prev) => ({ ...prev, mentor: { ...formState.mentor, name } }));
        }}
      >
        change mentor name
      </button>
      <button
        type="button"
        onClick={() => {
          const title = prompt(`멘토의 직업은?`);
          setFromState((prev) => ({ ...prev, mentor: { ...formState.mentor, title } }));
        }}
      >
        change mentor title
      </button>
    </div>
  );
}
