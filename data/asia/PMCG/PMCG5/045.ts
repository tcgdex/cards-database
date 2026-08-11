import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タケシのマンキー",
	},
	illustrator: "Ken Sugimori",

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
				'ja-jp': "フィジェット",
			},
			effect: {
				'ja-jp': "デッキをシャッフルします。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "空手チョップ",
			},
			effect: {
				'ja-jp': "BrockのMankeyの各ダメージカウンターに対して40ダメージから10ダメージを差し引いて10ダメージを除きます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576758
			},
		},
	],
};

export default card
