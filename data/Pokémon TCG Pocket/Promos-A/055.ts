import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	stage: "Stage2",

	evolveFrom: {
		en: "Machoke"
	},

	attacks: [{
		name: {
			en: "Power Press"
		},

		cost: ["Fighting", "Fighting"],
		damage: "70+",

		effect: {
			en: "If this Pokémon has at least 2 extra [Fighting] Energy attached, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card
