import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Finizen"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'id-id': "Finizen suka bermain-main dengan ring air pada sirip ekornya bersama sesamanya. Pokémon ini mendeteksi emosi makhluk hidup dengan gelombang ultrasonik."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pukulan Ekor"
		},

		damage: 30,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card