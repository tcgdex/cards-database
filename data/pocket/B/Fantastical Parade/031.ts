import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [866],

	name: {
		'en-us': "Galarian Mr. Rime"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Galarian Mr. Mime"
	},

	description: {
		'en-us': "Its amusing movements make it very popular.\nIt releases its psychic power from the pattern\non its belly."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Triple Spin"
		},

		damage: 60,
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 60 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card