import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rillaboom"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [812],
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Thwackey"
	},

	description: {
		'en-us': "The one with the best drumming techniques\nbecomes the boss of the troop. It has a gentle\ndisposition and values harmony among its group."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Captivating Rhythm"
		},

		effect: {
			'en-us': "Once during your turn, you may flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Drum Rush"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria"]
}

export default card