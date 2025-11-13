import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	description: {
		en: "Its magnificent bark conveys a sense of majesty.\nAnyone hearing it can't help but grovel before it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fire Fang"
		},

		damage: 50,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned."
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