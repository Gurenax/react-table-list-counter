import React, { Component } from 'react'
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.min.css'
import './App.css'
import TableDataCounter from './components/TableDataCounter';

class App extends Component {
  state = {
    listData: null
  }

  /*
  * Increment or Decrement Quantity
  */
  handleCounterQuantity = (id, operation) => {
    this.setState(prevState => {
      const listData = prevState.listData.map(data =>{
        if(data.id === id) {
          switch(operation) {
            case 'increment':
              data.quantity += 1
              break
            case 'decrement':
              data.quantity >= 1 ? data.quantity -= 1 : 0
              break
          }
        }
        return data
      })
      return {
        listData
      }
    })
  }

  /*
  * Increment or Decrement Rating
  */
  handleCounterRating = (id, operation) => {
    this.setState(prevState => {
      const listData = prevState.listData.map(data =>{
        if(data.id === id) {
          switch(operation) {
            case 'increment':
              data.rating += 1
              break
            case 'decrement':
              data.rating >= 1 ? data.rating -= 1 : 0
              break
          }
        }
        return data
      })
      return {
        listData
      }
    })
  }

  componentDidMount() {
    // Initialise data
    this.setState({
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
    })
  }

  render() {
    const { listData } = this.state

    return (
      <div className="App">
        <div className="container">
          <h1>React Table List with Counter</h1>
          <div className="table-responsive">
            {
              !!listData ? (
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
                      <th scope="row">{index+1}</th>
                      <td>{data.name}</td>
                      <TableDataCounter id={data.id} count={data.quantity} handleCounter={this.handleCounterQuantity} />
                      <TableDataCounter id={data.id} count={data.rating} handleCounter={this.handleCounterRating} />  
                    </tr>
                  ))
                }
              </tbody>
            </table>
              )  : <div>Loading...</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
