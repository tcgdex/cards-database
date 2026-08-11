import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass"
	},

	illustrator: "Nelnal",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [131],
	hp: 100,
	types: ["Water"],

	description: {
		'en-us': "A smart and kindhearted Pokémon,\nit glides across the surface of the sea while\nits beautiful song echoes around it.",
		'fr-fr': "C'est un Pokémon doux et intelligent. Il vogue sur la mer en émettant un chant magnifique."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			'en-us': "If this Pokémon has at least 3 extra {W} Energy attached, this attack does 70 more damage.",
			'fr-fr': "Si ce Pokémon a au moins 3 Énergies {W} supplémentaires, cette attaque inflige 70 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card