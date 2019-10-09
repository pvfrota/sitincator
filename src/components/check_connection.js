import React, { Component, PropTypes } from 'react';

export default class CheckConnection extends Component {
  render() {
    return (
      <div className="no-connection">
        <strong>{ remote.getGlobal('calendarName') }</strong>
        <div className="icon"><i className="icon icon-no-connection"></i></div>
        <h3 className="text">Falha ao conectar na API do Google Calendar</h3>
      </div>
    )
  }
}
