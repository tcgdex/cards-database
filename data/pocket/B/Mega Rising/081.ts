import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jolteon ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [135],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Electromagnetic Wall"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy from their Energy Zone to 1 of their Pokémon, do 20 damage to that Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Mach Bolt"
		},

		damage: 80,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card