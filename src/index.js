import { createElement, reactDOM } from './react';
import { Header } from './components/header';
import { Layout } from './components/layout'
import './components/style.css'

const App = () => {
    // return createElement('div', null, Header())

    const main  =  createElement("div", null)
    const  layout =  createElement('div', null,Layout())
    // main.append(Header())
    main.append(layout)
    return main
}
reactDOM.render(App(), document.getElementById('root'));