import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Mudbray"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		id: "Lumpur yang menyelimuti Mudbray adalah hasil memamah biak setelah memakan tanah. Lumpur tersebut tidak akan kering meskipun berjemur dalam waktu yang lama."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tendangan Penghempas"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Semprotan Lumpur"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card