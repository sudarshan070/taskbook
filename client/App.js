import React from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import Todo from './components/Todo'

import Aside from './components/Aside'
import AddTodo from './components/AddTodo'
import UpdateTodo from './components/UpdateTodo'


export default function App() {
    return (
        <BrowserRouter>
            <section className="dashboard d-flex">
                <Aside />
                <Switch>
                    <Route exact path='/' component={Todo} />
                    <Route exact path='/create' component={AddTodo} />
                    <Route exact path='/api/todo/update/:id' component={UpdateTodo} />
                </Switch>
            </section>
        </BrowserRouter>

    )
}