import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マンキー",
	},

	illustrator: "Sumiyoshi Kizuki",
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
				'ja-jp': "いたずら",
			},
			effect: {
				'ja-jp': "相手のデッキをシャッフルします。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "怒り",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575729
			},
		},
	],
};

export default card
