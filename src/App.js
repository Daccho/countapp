import React, { Component } from 'react';

const App = () => {
  return <Counter />;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,          // カウント値
      history: []        // 操作履歴
    };
  }

  // カウントアップ（+1）
  onIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
      history: [...prevState.history, `+ → ${prevState.value + 1}`]
    }));
  }

  // カウントダウン（-1）
  onDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
      history: [...prevState.history, `- → ${prevState.value - 1}`]
    }));
  }

  // カウントリセット（0に戻す）
  onReset = () => {
    this.setState(prevState => ({
      value: 0,
      history: [...prevState.history, 'リセット → 0']
    }));
  }

  // UIを描画する render関数
  render() {
    const { value, history } = this.state;

    return (
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>
          カウント値：{value}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button type="button" onClick={this.onIncrement} style={{ marginRight: '5px' }}>＋</button>
          <button type="button" onClick={this.onDecrement} style={{ marginRight: '5px' }}>－</button>
          <button type="button" onClick={this.onReset}>リセット</button>
        </div>
        <div>
          <strong>操作履歴：</strong>
          <ul>
            {history.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';

// const App = () => {
//   return <Counter />
// }

// class Counter extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = {
//       value : 0
//     }
//   }
//   //インクリメントする関数
//   onIncrement = () => {
//     //setStateでstateの値を更新します
//     this.setState({ value : this.state.value + 1});
//   }

//   //デクリメントする関数
//   onDecrement = () => {
//     //setStateでstateの値を更新します
//     this.setState({ value : this.state.value - 1});
//   }

//   render()
//   {
//     return (
//       <div>
//         <div>
//           カウント値：{this.state.value}
//         </div>
//         <div>
//           <button type="button" onClick={this.onIncrement}>+</button>
//           <button type="button" onClick={this.onDecrement}>-</button>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
