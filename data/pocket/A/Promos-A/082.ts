import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poipole",
		'es-es': "Poipole"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [803],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "This Ultra Beast is well enough liked to be\nchosen as a first partner in its own world.",
		'es-es': "En su mundo, este Ultraente se considera tan entrañable\ncomo para ser elegido compañero de viaje."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "2-Step",
			'es-es': "2-Step"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card