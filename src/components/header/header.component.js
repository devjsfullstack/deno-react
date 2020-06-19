import React from 'react';
import './header.component.css';
import deno from '../../assets/img/deno.svg';

class Header extends React.Component {
    render () {
        return (
            <div id="header">
                <nav>
                    <div className="nav-wrapper light-green darken-3">
                        <div className="row">
						    <div className="col s12">
                                <a href="https://deno.land/">
                                    <img src={ deno } className="responsive-img circle" alt="deno" />
                                    <span className="name flow-text">Deno</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;