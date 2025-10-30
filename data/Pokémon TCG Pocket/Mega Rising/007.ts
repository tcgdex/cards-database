import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dustox"
	},

	illustrator: "Midori Harada",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Cascoon"
	},

	description: {
		en: "It violently flutters its wings to scatter toxic dust\nwhen attacked. It becomes active after sunset."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Select Powder"
		},

		damage: 60,
		cost: ["Grass"],

		effect: {
			en: "Choose either Poisoned or Confused. Your opponent's Active Pokémon is now affected by that Special Condition."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card