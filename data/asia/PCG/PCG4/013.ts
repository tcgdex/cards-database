import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フレアロン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [136],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "ファイアダンス",
			},
			effect: {
				'ja-jp': "廃棄の山を検索して、ファイアエネルギーカードを使用して、1枚のポケモンに取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "マルチバーン",
			},
			effect: {
				'ja-jp': "Flareonに3つ以上の異なるタイプの基本エネルギーカードが付属している場合、この攻撃は40ダメージに20ダメージを与え、防御ポケモンが燃やされます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
