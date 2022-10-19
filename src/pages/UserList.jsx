import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyleGrandDiv = styled.div`
  margin-left:200px;
  margin-top:50px;
  color:blue;
`

const StyleLinkDiv =styled.div`
  display:flex;
  gap:30px;
`
const UserList = () => {
  return (
   <StyleGrandDiv>
        <h1> User List</h1>
        <StyleLinkDiv>
            <Link to='user/12'>User 12</Link>
            <Link to='user/18'>User 18</Link>
        </StyleLinkDiv>


    </StyleGrandDiv>
  )
}

export default UserList