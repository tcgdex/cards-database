import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのドドゥオ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [84],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ワイルドキック",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "報復",
			},
			effect: {
				ja: "10ダメージを繰り返し、ブレインのドドゥオのダメージ数をカウンターします。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
