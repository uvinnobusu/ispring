import React, { ReactNode } from "react";


class HeaderPullMenu extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);

        this.state = {
            
        }

        this.renderAfterMouseOver = this.renderAfterMouseOver.bind(this);
    }

    render(): JSX.Element {
        return (
            <div className="header__pullmenu">
                <ul className="header__pullmenu-nav">
                    <li id="pullmenu-item">
                        <a href="#!" className="header__pullmenu-link">
                            Бакалавриат
                        </a>
                        
                    </li>
                    <li id="pullmenu-item">
                        <a href="#!" className="header__pullmenu-link">
                            Прямые эфиры
                        </a>
                    </li>
                    <li id="pullmenu-item">
                        <a href="#!" className="header__pullmenu-link">
                            Грант на обучение
                        </a>
                    </li>
                    <li id="pullmenu-item">
                        <a href="#!" className="header__pullmenu-link">
                            Личный кабинет
                        </a>
                    </li>
                    <li id="pullmenu-item">
                        <a href="#!" className="header__pullmenu-link">
                            Прием 2023
                        </a>
                    </li>
                </ul>
                <div className="header__pullmenu-info">
                    {this.renderAfterMouseOver(document.querySelectorAll("#pullmenu-item"), document.querySelector(".header__pullmenu-info"))}
                </div>
            </div>
        )
    }

    renderAfterMouseOver(el: NodeListOf<Element>, infoWrapper: Element | null): undefined {
        let defaultItem = `
            <ul class="">
                <li>
                    <a href="#!" class="">Программирование</a>
                 </li>
            </ul>
        `
        if (infoWrapper !== null) {
            infoWrapper.innerHTML = defaultItem;
            el.forEach(item => {
                item.addEventListener("mouseover", () => {
                    switch (item) {
                        case el[0]:
                            infoWrapper.innerHTML = defaultItem
                            break;
                        case el[1]:
                            infoWrapper.innerHTML = `1`;
                            break;
                        case el[2]:
                            infoWrapper.innerHTML = `2`;
                            break;
                        case el[3]:
                            infoWrapper.innerHTML = `3`;
                            break;
                        case el[4]:
                            infoWrapper.innerHTML = `4`;
                            break;
                        default:
                            infoWrapper.innerHTML = defaultItem;
                            break;
                    }  
                });
            });
        }
        return undefined;
    }
}

export default HeaderPullMenu;