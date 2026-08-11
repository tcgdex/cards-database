import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [791],

	name: {
		'en-us': "Solgaleo ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Cosmoem"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rising Road"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Sol Breaker"
		},

		damage: 120,
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card