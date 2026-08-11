import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Scyther"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'id-id': "Sabit tajam pada kedua tangan Scyther akan makin meningkat ketajamannya jika makin banyak memotong benda keras."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Potong"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Slash Down"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Slash Down."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card