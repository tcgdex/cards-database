import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kartana",
		'fr-fr': "Katagami"
	},

	illustrator: "nagimiso",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [798],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "This Ultra Beast's body, which is as thin\nas paper, is like a sharpened sword.",
		'fr-fr': "Le corps de cette Ultra-Chimère semble fin comme du papier, mais il est aussi tranchant qu'un sabre affûté."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Thrash Metal",
			'fr-fr': "Trash Metal"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card