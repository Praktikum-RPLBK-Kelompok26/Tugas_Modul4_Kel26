import logo from './logo.svg';
import './App.css';
import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import home from "./home/home";
import { catalog } from "./catalog/catalog";
import card from "./card/card";
import game from "./game/game";
import bg from "./bg/bg";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                <Link to="/home">
                  Tugas Modul 4 - Kel 26
                </Link>
              </a>
              <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <Link to="/home">
                        Home
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <Link to="/catalog">
                        Catalog
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <Link to="/card">
                        User Card
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <Link to="/game">
                        Game
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <Link to="/bg">
                        Ganti Warna
                      </Link>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/home" exact component={home}/>
          <Route path="/catalog" exact component={catalog}/>
          <Route path="/card" exact component={card}/>
          <Route path="/game" exact component={game}/>
          <Route path="/bg" exact component={bg}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}
