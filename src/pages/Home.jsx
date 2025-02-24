import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerContactos } from "../store.js";
import { Card } from "../components/card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		obtenerContactos(dispatch)
	}, [])
	
	console.log(store.contacts)
	return (
		<div className="text-center mt-5">
			<h1>Contact List</h1>
			{store.contacts.length > 0 ? (
				<div className="d-flex flex-column align-items-center">
					{store.contacts.map((contacto) => (
						<Card
							key={contacto.id}
							id={contacto.id}
							name={contacto.name}
							address={contacto.address}
							phone={contacto.phone}
							email={contacto.email}
						/>
					))}
				</div>
			) : (
				<p> no existen contactos</p>
			)}
		</div>
	);
};

