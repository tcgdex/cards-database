import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Infernape ex",
		'fr-fr': "Simiabraz-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [392],
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Monferno"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Flare Blitz",
			'fr-fr': "Boutefeu"
		},

		damage: 140,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Discard all {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies {R} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 0
}

export default card