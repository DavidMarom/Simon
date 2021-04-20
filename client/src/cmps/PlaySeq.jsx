import React, { useState, useEffect } from 'react'

export function PlaySeq({ seq }) {
	const [currLight, setCurrLight] = useState();

	// useEffect(() => {
	// 	console.log('useEffect log:', currLight);
	// }, [currLight])

	return (
		<div>
			{seq}
			{seq.map((el) => {
				// (el ? setCurrLight(el) : null);
				// setCurrLight(el);
				
				
				setTimeout(  
					()=>{
						
						console.log('NEXT NUMBER IS:', el)
					}
					,
					1000	
				)



			}
			)
			}

		</div>
	)
}