import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Forretress"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'id-id': "Forretress menyelimuti dirinya dengan cangkang yang keras seperti baja. Wujud asli di dalamnya tidak diketahui."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Meriam Duri"
		},

		effect: {
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
		cost: ["Metal"]
	}, {
		name: {
			'id-id': "Serudukan Baja"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 40."
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card