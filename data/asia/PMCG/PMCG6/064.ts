import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カツラのドードー",
	},
	illustrator: "Ken Sugimori",

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
				'ja-jp': "ワイルドキック",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "報復",
			},
			effect: {
				'ja-jp': "10ダメージを繰り返し、ブレインのドドゥオのダメージ数をカウンターします。",
			},
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575298
			},
		},
	],
};

export default card
