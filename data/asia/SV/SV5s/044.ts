import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Finizen"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'id-id': "Finizen suka bermain-main dengan ring air pada sirip ekornya bersama sesamanya. Pokémon ini mendeteksi emosi makhluk hidup dengan gelombang ultrasonik."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Guyuran Air"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Sirip Tajam"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card