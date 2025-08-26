import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "グリガー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [207],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "スタンポイズン",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今や麻痺し、毒されます。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
