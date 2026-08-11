import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pachirisu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "A pair may be seen rubbing their cheek pouches\ntogether in an effort to share stored electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Attack the Wound"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon has damage on it, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card