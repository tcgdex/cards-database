import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dawn Wings Necrozma",
		'es-es': "Necrozma Alas del Alba"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [800],
	hp: 110,
	types: ["Psychic"],

	description: {
		'en-us': "Lunala no longer has a will of its own. Now under the\ncontrol of Necrozma, it continuously expels all of its energy.",
		'es-es': "En esta forma, Lunala no goza de voluntad propia. Necrozma\ntiene control absoluto y absorbe su energía poco a poco."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psychobilly",
			'es-es': "Psychobilly"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol9"]
}

export default card