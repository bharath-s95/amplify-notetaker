import React, { Component } from 'react';
import { withAuthenticator } from "aws-amplify-react";

class App extends Component {
  state = {
    notes: [{
      id: 1,
      note: 'Hello World!'
    }]
  }
  renderNotes = (notes) => {
    return notes.map(note => {
      return (
        <div className="flex items-center">
          {note.note}
          <button>&times;</button>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="flex flex-column items-center justify-center pa3 bg-washed-red" style={{ textAlign: 'center', backgroundColor: '#fce2db' }}>
        <h1 className="code f2-1">Amplify Notetaker</h1>
        <form>
          <input type="text" />
          <button>Add Note</button>
        </form>

        <div>
          {this.renderNotes(this.state.notes)}
        </div>

      </div>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
