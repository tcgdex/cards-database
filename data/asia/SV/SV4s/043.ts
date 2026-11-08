import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Wiglett"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'id-id': "Wiglett dapat mencium bau yang dikeluarkan Veluza yang berada dalam jarak 20 meter, lalu bersembunyi di dalam pasir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Vibrasi"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card