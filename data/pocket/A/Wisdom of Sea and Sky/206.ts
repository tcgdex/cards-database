import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Donphan ex",
		'fr-fr': "Donphan-ex"
	},

	illustrator: "Yuriko Akase",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [232],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Phanpy"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Gigantic Press",
			'fr-fr': "Pression Gigatonne"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			'en-us': "If this Pokémon has at least 2 extra {F} Energy attached, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon a au moins 2 Énergies {F} de plus, cette attaque inflige 60 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card