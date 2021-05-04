import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudent from '../views/AddStudent';
import Home from '../views/Home';
import Students from '../views/Students';
import SingleStudent from '../views/SingleStudent';
import NotFound from '../views/NotFound';

export default function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
        // make this an exact path so the dynamic route works
          exact
          path='/students'
          component={() => <Students students={students} setStudents={setStudents} />}
        />
        {/* // creating dynamic route to see single student info // */}
        <Route
          path='/students/:firebaseKey'
          component={SingleStudent}
          />
        <Route
          path='/add-students'
          component={() => <AddStudent setStudents={setStudents} />}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
