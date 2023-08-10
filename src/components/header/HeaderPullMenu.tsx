import React, { ReactNode } from "react";


class HeaderPullMenu extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);

        this.state = {
            
        }

        // this.renderAfterMouseOver = this.renderAfterMouseOver.bind(this);
    }

    render(): JSX.Element {
        return (
            <div className="header__pullmenu">
                <ul className="header__pullmenu-nav">
                    <li>
                        <a href="#!" className="header__pullmenu-link" id="pullmenu-item">
                            Бакалавриат
                        </a>
                        
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link" id="pullmenu-item">
                            Прямые эфиры
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link" id="pullmenu-item">
                            Грант на обучение
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link" id="pullmenu-item">
                            Личный кабинет
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link" id="pullmenu-item">
                            Прием 2023
                        </a>
                    </li>
                </ul>
                <div className="header__pullmenu-info">
                    {/* {this.renderAfterMouseOver(document.querySelectorAll("#pullmenu-item"))} */}
                </div>
            </div>
        )
    }

    // renderAfterMouseOver(el: NodeListOf<Element>): JSX.Element {
        
    //     return (
    //         <div>
    //             hello
    //         </div>
    //     )
    // }
}

export default HeaderPullMenu;