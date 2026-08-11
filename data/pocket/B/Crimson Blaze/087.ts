import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [6],

	name: {
		'en-us': "Mega Charizard Y ex"
	},

	illustrator: "Nurikabe",
	rarity: "Three Star",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charmeleon"
	},

	description: {
		'en-us': "Its bond with its Trainer is the source of\nits power. It boasts speed and maneuverability\ngreater than that of a jet."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Crimson Dive"
		},

		damage: 250,
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card