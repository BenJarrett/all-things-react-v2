import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/studentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
      <h1>Single Student</h1>
      <h2>{student.name}</h2>
      <h5>{student.teacher}</h5>
      <h5>{student.grade}</h5>
    </div>
  );
}
