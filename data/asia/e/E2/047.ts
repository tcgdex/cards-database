import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スムーチュム",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [238],
	hp: 30,
	types: ["Psychic"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "エネルギーキス",
			},
			effect: {
				'ja-jp': "防御ポケモンに接続されたエネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
