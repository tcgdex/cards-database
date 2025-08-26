import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックの韻",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [111],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ドリルタックル",
			},
			effect: {
				ja: "2つのコインをフリップします。それらの1つまたは両方が尾の場合、この攻撃は何もしません。",
			},
			damage: 70,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
