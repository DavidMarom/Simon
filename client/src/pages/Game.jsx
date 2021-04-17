import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from '../store/actions/userActions';

export const Game = () => {

	let activeUser = useSelector(state => state.userReducer.user);


	return (
		<div>
			<h1>Game</h1>


			<p>The user is: {activeUser}</p>

		</div>
	)
}
