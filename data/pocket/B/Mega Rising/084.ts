import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ampharos"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [181],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Flaaffy"
	},

	description: {
		'en-us': "When it gets dark, the light from its bright,\nshiny tail can be seen from far away on the\nocean's surface."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Zapping Bullet"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			'en-us': "1 of your opponent's Benched Pokémon is chosen at random. This attack also does 20 damage to it."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card