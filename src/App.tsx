import React from 'react';
import Header from './components/header/Header';
import StartPage from './components/start-page/StartPage';

import "./css/fonts.css"
import "./css/style.css"

type TypeState = {

}

type TypeProps = {

}


class App extends React.Component<TypeProps, TypeState> {
  constructor(props: TypeProps) {
    super(props);

    this.state = {}
  }

  render(): JSX.Element {
    return (
      <React.StrictMode>
        <Header />
        {/* <StartPage /> */}
      </React.StrictMode>
    )
  }
}

export default App;
