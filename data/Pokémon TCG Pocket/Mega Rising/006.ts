import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Cascoon"
	},

	illustrator: "GOSSAN",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Wurmple"
	},

	description: {
		en: "It never forgets any attack it endured while in the\ncocoon. After evolution, it seeks payback."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Harden"
		},

		cost: ["Grass"],

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card