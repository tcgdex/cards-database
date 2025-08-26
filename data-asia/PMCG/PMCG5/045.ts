import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのマンキー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フィジェット",
			},
			effect: {
				ja: "デッキをシャッフルします。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "空手チョップ",
			},
			effect: {
				ja: "BrockのMankeyの各ダメージカウンターに対して40ダメージから10ダメージを差し引いて10ダメージを除きます。",
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
