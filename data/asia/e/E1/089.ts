import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチャンプ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "テラフォーミング",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、デッキの上位4枚のカードを見て、好きなように再配置することができます。 Machampが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "鉄の拳",
			},
			effect: {
				'ja-jp': "プレイしているポケモンの数を数えて、それらにダメージカウンターでカウントします。コインをひっくり返します。頭の場合、この攻撃は50のダメージに加えて、それらのポケモンのそれぞれに対してさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
