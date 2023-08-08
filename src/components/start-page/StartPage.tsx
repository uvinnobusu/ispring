import React from "react";

import startPageBackground from "./video/start-page-background.webm";

class StartPage extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);

        this.state = {}
    }

    render(): JSX.Element {
        return (
            <div className="startpage">
                <div className="startpage__cover-background">
                    <video preload="auto" autoPlay loop muted no-controls="true" playsInline>
                        <source src={startPageBackground} />
                    </video>
                </div>
                <h1>iSpring</h1>
            </div>
        )
    }
}

export default StartPage;