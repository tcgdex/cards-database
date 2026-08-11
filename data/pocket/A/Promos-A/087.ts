import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alcremie",
		'es-es': "Alcremie"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [869],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Milcery",
		'es-es': "Milcery"
	},

	description: {
		'en-us': "When it trusts a Trainer, it will treat them\nto berries it's decorated with cream.",
		'es-es': "Obsequia bayas decoradas con nata a\naquellos Entrenadores en los que confía."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sweets Overload",
			'es-es': "Dulzor Extremo"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			'en-us': "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game.",
			'es-es': "Este ataque hace 40 puntos de daño por cada vez que tus Pokémon hayan usado Relevo Dulce durante esta partida."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol10"]
}

export default card