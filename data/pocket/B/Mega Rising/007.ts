import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dustox"
	},

	illustrator: "Midori Harada",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [269],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cascoon"
	},

	description: {
		'en-us': "It violently flutters its wings to scatter toxic dust\nwhen attacked. It becomes active after sunset."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Select Powder"
		},

		damage: 60,
		cost: ["Grass"],

		effect: {
			'en-us': "Choose either Poisoned or Confused. Your opponent's Active Pokémon is now affected by that Special Condition."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card