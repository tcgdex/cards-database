import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Snorunt"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'id-id': "Dikabarkan beberapa Snorunt berkumpul dan hidup bersama di bawah daun besar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Beling Es"
		},

		effect: {
			'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {Petarung}, kerusakan yang diberikan bertambah sejumlah 30."
		},

		damage: "10+",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card