import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [397],

	name: {
		'en-us': "Staravia"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Starly"
	},

	description: {
		'en-us': "They maintain huge flocks, although fierce\nscuffles break out between various flocks."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Quick Attack"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card