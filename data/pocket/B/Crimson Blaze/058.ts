import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [474],

	name: {
		'en-us': "Porygon-Z"
	},

	illustrator: "Shibuzoh.",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon2"
	},

	description: {
		'en-us': "Porygon-Z had a program installed to allow it to\nmove between dimensions, but the program also\ncaused instability in Porygon-Z's behavior."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Cyberjack"
		},

		damage: 20,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each Trainer card in your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card