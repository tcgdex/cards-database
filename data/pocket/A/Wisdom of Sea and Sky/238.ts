import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weavile ex",
		'fr-fr': "Dimoret-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [461],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Sneasel"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Scratching Nails",
			'fr-fr': "Griffes Griffantes"
		},

		damage: 30,
		cost: ["Darkness"],

		effect: {
			'en-us': "If your opponent's Active Pokémon has damage on it, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 40 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card