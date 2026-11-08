import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モーティのニネタール",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [38],
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "will-o-wispに電話してください",
			},
			effect: {
				'ja-jp': "3コインをフリップします。各ヘッドについて、廃棄の山から1枚のファイアエネルギーカードを選択し、手に入れます。",
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "フリッカリングフレーム",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
