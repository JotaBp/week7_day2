import React from 'react'

const UserCard = ({ username, textColor }) => (
    <article className="card">
        <h3 style={{ color: textColor }}>¡Hola, {username}!</h3>
    </article>
)

export default UserCard