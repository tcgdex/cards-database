import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [288],

	name: {
		'en-us': "Vigoroth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Slakoth"
	},

	description: {
		'en-us': "It is always hungry because it won't stop\nrampaging. Even while it is eating, it can't\nkeep still."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Best Punch"
		},

		damage: 90,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card