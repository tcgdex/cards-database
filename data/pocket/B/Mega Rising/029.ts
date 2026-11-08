import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arcanine"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [59],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Growlithe"
	},

	description: {
		'en-us': "Its magnificent bark conveys a sense of majesty.\nAnyone hearing it can't help but grovel before it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fire Fang"
		},

		damage: 50,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card