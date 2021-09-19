import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import handphone from "../product/handphone";
import laptop from "../product/laptop";

export const catalog = () => {
    return (
        <BrowserRouter>
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Gadget Catalog</span>
                    <span className="block text-indigo-600">Pilih salah satu untuk melihat katalog!</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                        <Link to="/handphone">
                            Handphone
                        </Link>
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                        <Link to="/laptop">
                            Laptop
                        </Link>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/handphone" exact component={handphone}/>
                <Route path="/laptop" exact component={laptop}/>
            </Switch>
        </BrowserRouter>
    )
}