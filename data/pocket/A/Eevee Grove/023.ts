import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brionne",
		'fr-fr': "Otarlette"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [729],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Popplio"
	},

	description: {
		'en-us': "It gets excited when it sees a dance it\ndoesn't know. This hard worker practices\ndiligently until it can learn that dance.",
		'fr-fr': "Il est tout excité quand il est témoin d'une danse qu'il ne connaît pas. Il s'entraîne alors comme un forcené jusqu'à la maîtriser à la perfection."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card