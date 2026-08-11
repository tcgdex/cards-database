import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ディグダ",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 30,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "掘る",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "泥の平手打ち",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575574
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577001
			}
		}
	],
};

export default card
