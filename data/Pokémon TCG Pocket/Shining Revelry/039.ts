import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machoke"
	},

	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Power Press"
		},

		damage: "70+",
		cost: ["Fighting", "Fighting"],

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