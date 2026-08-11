import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [398],

	name: {
		'en-us': "Staraptor"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Staravia"
	},

	description: {
		'en-us': "It never stops attacking even if it is injured.\nIt fusses over the shape of its comb."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Hurricane Wing"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip 4 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card