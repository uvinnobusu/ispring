import React from "react";



class HeaderPullMenu extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);

    }

    render(): JSX.Element {
        return (
            <div className="header__pullmenu">
                <ul className="header__pullmenu-nav">
                    <li>
                        <a href="#!" className="header__pullmenu-link">
                            Бакалавриат
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link">
                            Прямые эфиры
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link">
                            Грант на обучение
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link">
                            Личный кабинет
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="header__pullmenu-link">
                            Прием 2023
                        </a>
                    </li>
                </ul>
                <div className="header__pullmenu-info"></div>
            </div>
        )
    }
}

export default HeaderPullMenu;