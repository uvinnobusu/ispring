import React from "react";


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

    renderAfterMouseOver(el: NodeListOf<Element>, infoWrapper: Element | null): JSX.Element | undefined {
        const menuParamsInitialSettings: boolean[] = [true, false, false, false, false];
        let menuParams: boolean[] = [true, false, false, false, false];
        if (menuParams[0]) {
            return (
                <div>
                    0
                </div>
            )
        }
        if (menuParams[1]) {
            return (
                <div>
                    1
                </div>
            )
        }
        if (menuParams[2]) {
            return (
                <div>
                    2
                </div>
            )
        }
        if (menuParams[3]) {
            return (
                <div>
                    3
                </div>
            )
        }
        if (menuParams[4]) {
            return (
                <div>
                    4
                </div>
            )
        }
        // el.forEach(item => {
        //     item.addEventListener("mouseover", () => {
        //         if (infoWrapper !== null) {
        //             // infoWrapper.innerHTML = "123";
        //             switch (item) {
        //                 case el[0]:
        //                     menuParams = menuParamsInitialSettings;
        //                     break;
        //                 case el[1]:
        //                     menuParams
        //             }
        //         }
        //     });
        // });

        for (let i = 0; el.length > i; i++) {
            el[i].addEventListener("mousemove", (item): void => {
                
            })
        }
    }
}

export default HeaderPullMenu;