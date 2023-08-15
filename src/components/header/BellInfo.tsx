import React from "react";

class BellInfo extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);

        this.state = {}
    }

    render(): JSX.Element {
        return (
            <div className="bell-info">
                <p>Учишься в 11 классе и мечтаешь о карьере в ИТ? Регистрируйся в Личном кабинете абитуриента</p>
                <button className="pullmenu-button">Регистрация</button>
            </div>
        )
    }
}

export default BellInfo;