import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドラン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [32],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "フォーカスエネルギー",
			},
			effect: {
				'ja-jp': "次のターン中、ニドランのホーンラッシュ攻撃のベースダメージは2倍になります。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "ホーンラッシュ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
