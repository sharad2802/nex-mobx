import React from 'react'
import Link from 'next/link'

export default class MainComponent extends React.Component {
  render() {
    const {
      text
    } = this.props

    return (
      <div>
        <div>{text}</div>
        <Link
          href={{ pathname: '/firstassignment', query: {} }}
        >
          <a>Go home</a>
        </Link>
      </div>
    )
  }
}