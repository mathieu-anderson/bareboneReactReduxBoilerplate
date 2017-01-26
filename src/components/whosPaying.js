const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton } = require('material-ui')


const WhosPaying = (props) => {
  const { currentNight, dispatch } = props
  const { users } = currentNight
  const usersForDisplay = Object.keys(users).map(userKey => {
    users[userKey].color = users[userKey].paying
      ? 'green'
      : 'white'
    return users[userKey]
  })
  console.log('users for diplay', usersForDisplay);
  return (
    <div>
    <h2>Who is going to pick up the bill?</h2>
    {usersForDisplay.map(user => <FlatButton style={backgroundColor: {user.color}}>{user.name}</FlatButton>)}
    </div>
  )
}


module.exports = WhosPaying
