import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Honchkrow"
	},

	illustrator: "IKEDA Saki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [430],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Murkrow"
	},

	description: {
		'en-us': "A single cry from this nocturnal Pokémon, and\nmore than 100 of its Murkrow cronies will\nassemble."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Evil Admonition"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 40 more damage for each of your opponent's Pokémon in play that has an Ability."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card