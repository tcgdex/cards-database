import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サブリナのエスペオン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [196],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "サンフラッシュ",
			},
			effect: {
				'ja-jp': "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "Psywave",
			},
			effect: {
				'ja-jp': "この攻撃は、防御ポケモンのエネルギーカードの数を10回ダメージします。",
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
			stamp: ["1st-edition"],
		},
	],
};

export default card
