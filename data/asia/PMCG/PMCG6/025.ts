import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カツラのヒトカゲ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "Kindle",
			},
			effect: {
				'ja-jp': "この攻撃を使用するために、ブレインのチャーマンダーに取り付けられた1つのエネルギーカードを捨ててください。防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "スラッシュ",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575297
			},
		},
	],
};

export default card
