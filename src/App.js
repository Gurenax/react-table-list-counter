import React, { Component } from 'react'
import logo from './logo.svg'
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  state = {
    listData: [
      {
        id: 1,
        name: 'Apple',
        quantity: 0,
        rating: 0
      },
      {
        id: 2,
        name: 'Banana',
        quantity: 0,
        rating: 0
      },
      {
        id: 3,
        name: 'Carrot',
        quantity: 0,
        rating: 0
      }
    ]
  }

  handleDecrementQuantity = id => {
    alert(id)
    // this.setState(prevState => ({
      
    // }))
  }

  handleIncrementQuantity = id => {
    alert(id)
  }

  render() {
    const { listData } = this.state

    return (
      <div className="App">
        <div className="container">
          <h1>React Table List with Counter</h1>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                {
                  listData.map( (data, index) => (
                    <tr key={data.id}>
                      <th scope="row">{index}</th>
                      <td>{data.name}</td>
                      <td className="nowrap">
                        <button className="btn mr-2" onClick={e => this.handleDecrementQuantity(data.id)}>-</button>
                        {data.quantity}
                        <button className="btn ml-2" onClick={e => this.handleIncrementQuantity(data.id)}>+</button>
                      </td>
                      <td className="nowrap">
                        <button className="btn mr-2">-</button>
                        {data.rating}
                        <button className="btn ml-2">+</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
