import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [792],

	name: {
		'en-us': "Lunala ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Cosmoem"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Psychic Connect"
		},

		effect: {
			'en-us': "Once during your turn, you may move all {P} Energy from 1 of your Benched {P} Pokémon to your Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Lunar Blast"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card