import React from "react";
import {CSSTransition} from "react-transition-group";
import HeaderPullMenu from "./HeaderPullMenu";
import ispringLogo from "./img/ispring-institute-logo.svg";

type TypeState = {
    showPullMenu: boolean,
}

class Header extends React.Component<{}, TypeState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showPullMenu: false,
        }
    }

    render(): JSX.Element {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <img src={ispringLogo} alt="institute ispring"/>
                        </div>
                        <ul className="header__navigation">
                            <li>
                                <a className="header__navigation-link pullmenu" href="#!" onClick={(): void => {
                                    this.setState({
                                        showPullMenu: !this.state.showPullMenu,
                                    })
                                }}>
                                    Абитуриентам
                                    <svg style={{
                                        transform: (this.state.showPullMenu) ? "rotate(180deg)" : undefined,
                                        marginTop: (this.state.showPullMenu) ? "-2px" : undefined,
                                    }} width="11" height="7" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.5 6L12 1" stroke="#FF603D" strokeWidth="1.5"/></svg>
                                </a>
                                <CSSTransition
                                    in={this.state.showPullMenu} 
                                    classNames={{
                                        enter: "alert-enter",
                                        enterActive: "alert-enter-active",
                                        exit: "alert-exit",
                                        exitActive: "alert-exit-active",
                                    }}
                                    timeout={300} 
                                    unmountOnExit>

                                    <HeaderPullMenu />
                                </CSSTransition>
                            </li>
                            <li>
                                <a className="header__navigation-link" href="#!">
                                    Мероприятия
                                </a>
                            </li>
                            <li>
                                <a className="header__navigation-link" href="#!">
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a className="header__navigation-link" href="#!">
                                    О нас
                                </a>
                            </li>
                        </ul>
                        <div className="header__user-interactions">
                            <button className="header__user-login">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.625 9.625V7.4375C9.625 6.85734 9.85547 6.30094 10.2657 5.8907C10.6759 5.48047 11.2323 5.25 11.8125 5.25H23.1875C23.7677 5.25 24.3241 5.48047 24.7343 5.8907C25.1445 6.30094 25.375 6.85734 25.375 7.4375V20.5625C25.375 21.1427 25.1445 21.6991 24.7343 22.1093C24.3241 22.5195 23.7677 22.75 23.1875 22.75H11.8125C11.2323 22.75 10.6759 22.5195 10.2657 22.1093C9.85547 21.6991 9.625 21.1427 9.625 20.5625V18.375" stroke="#FF603D" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.875 18.375L19.25 14L14.875 9.625M2.625 14H18.375" stroke="#FF603D" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                Личный кабинет
                            </button>
                            <svg width="28" height="28" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_14_84)"><path d="M14.5834 7.29167C14.5834 6.51812 14.8907 5.77625 15.4376 5.22927C15.9846 4.68229 16.7265 4.375 17.5 4.375C18.2736 4.375 19.0155 4.68229 19.5624 5.22927C20.1094 5.77625 20.4167 6.51812 20.4167 7.29167C22.0915 8.08358 23.5192 9.31631 24.5468 10.8577C25.5744 12.3991 26.1632 14.1911 26.25 16.0417V20.4167C26.3598 21.3233 26.6809 22.1915 27.1875 22.9514C27.6941 23.7113 28.372 24.3416 29.1667 24.7917H5.83337C6.62808 24.3416 7.30601 23.7113 7.81261 22.9514C8.3192 22.1915 8.64029 21.3233 8.75004 20.4167V16.0417C8.8369 14.1911 9.42569 12.3991 10.4533 10.8577C11.4809 9.31631 12.9086 8.08358 14.5834 7.29167Z" stroke="#FF603D" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.125 24.7917V26.25C13.125 27.4103 13.5859 28.5231 14.4064 29.3436C15.2269 30.1641 16.3397 30.625 17.5 30.625C18.6603 30.625 19.7731 30.1641 20.5936 29.3436C21.4141 28.5231 21.875 27.4103 21.875 26.25V24.7917" stroke="#FF603D" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_14_84"><rect width="35" height="35" fill="white"/></clipPath></defs></svg>
                        </div>
                    </div>

                </div>
            </header>
        )
    }

}

export default Header;