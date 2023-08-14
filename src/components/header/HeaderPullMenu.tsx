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

    renderAfterMouseOver(el: NodeListOf<Element>, infoWrapper: Element | null): undefined {
        let defaultItem = `
            <ul class="pullmenu-list">
                <li>
                    <a href="#!" class="pullmenu-item">
                        Программирование
                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#!" class="pullmenu-item">
                        Маркетинг цифрового продукта
                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#!" class="pullmenu-item">
                        Дизайн цифрового продукта
                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#!" class="pullmenu-item">
                        Проектирование цифрового продукта
                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#!" class="pullmenu-item">
                        Учитель информатики
                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
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
                            infoWrapper.innerHTML = `
                            <ul class="pullmenu-list">
                                <li>
                                    <a href="#!" class="pullmenu-item">
                                        День открытых дверей
                                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="pullmenu-item">
                                        Решаем профильную математику ЕГЭ
                                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="pullmenu-item">
                                        Учёба в ИТ-вузе: ожидание и реальность
                                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="pullmenu-item">
                                        Чем занимаются дизайнеры в ИТ-компании?
                                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="pullmenu-item">
                                        Решаем информатику ЕГЭ
                                        <svg width="7" height="12" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82812 1.59375L7.17188 7.5L1.82812 13.4062" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </a>
                                </li>
                            </ul>`;
                            break;
                        case el[2]:
                            infoWrapper.innerHTML = `
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab maxime iure est dolores laboriosam cum modi pariatur hic. Autem iure iusto facere eos maiores labore quasi exercitationem deserunt aspernatur.
                                </p>
                                <a class="pullmenu-button" href="#!">Подробнее</a>
                            `;
                            break;
                        case el[3]:
                            infoWrapper.innerHTML = `
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab maxime iure est dolores laboriosam cum modi pariatur hic. Autem iure iusto facere eos maiores labore quasi exercitationem deserunt aspernatur.
                                </p>
                                <button class="pullmenu-button">Личный кабинет</button>
                            `;
                            break;
                        case el[4]:
                            infoWrapper.innerHTML = `
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab maxime iure est dolores laboriosam cum modi pariatur hic. Autem iure iusto facere eos maiores labore quasi exercitationem deserunt aspernatur.
                                </p>
                                <a class="pullmenu-button" href="#!">Подробнее</a>
                            `;
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