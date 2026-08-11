import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブルーノのヒットモントップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [237],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "クイックローテーション",
			},
			effect: {
				'ja-jp': "次のターン中に、ブルーノのヒットモントップスピニングヘッド攻撃ベースのダメージは20ではなく40です。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "スピニングヘッド",
			},
			effect: {
				'ja-jp': "ベンチ付きポケモンがある場合は、コインをひっくり返します。頭の場合は、1匹のベンチポケモンでブルーノのヒットモントップを切り替えます。",
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
