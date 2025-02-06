import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage2",
	evolveFrom: {
		en: "Machoke"
	},


	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Seismic Toss"
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
	}
}

export default card
