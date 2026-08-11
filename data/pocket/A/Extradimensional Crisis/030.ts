import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto"
	},

	illustrator: "Uta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [343],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It moves while spinning around on its single foot.\nSome Baltoy have been seen spinning on\ntheir heads.",
		'fr-fr': "Il se déplace en tournoyant sur son pied. On le voit parfois faire de même sur la tête."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card