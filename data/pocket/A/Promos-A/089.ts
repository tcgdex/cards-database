import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Audino",
		'es-es': "Audino"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [531],
	hp: 100,
	types: ["Colorless"],

	description: {
		'en-us': "This Pokémon has a kind heart. By touching with its feelers,\nAudino can gauge other creatures' feelings and physical conditions.",
		'es-es': "Un Pokémon gentil que es capaz de comprender\nlos sentimientos y averiguar el estado de salud\nde todo aquel que toque con sus antenas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Drain Slap",
			'es-es': "Absorbebofetón"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol10"]
}

export default card