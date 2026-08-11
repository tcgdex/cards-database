import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [332],

	name: {
		'en-us': "Cacturne"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cacnea"
	},

	description: {
		'en-us': "It lives in deserts. It becomes active at night\nwhen it hunts for prey exhausted from the\ndesert's heat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Spike Rend"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card