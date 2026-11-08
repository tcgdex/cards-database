import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライチュ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [26],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "zzzap",
			},
			effect: {
				'ja-jp': "ポケパワーやポケボディ（あなたと対戦相手の両方）がある各ポケモンに20のダメージを与えます。衰弱や抵抗を適用しないでください。",
			},
		},
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				'ja-jp': "メタリックサンダー",
			},
			effect: {
				'ja-jp': "Raichuに取り付けられた2つの金属エネルギーを捨てることができます。そうすれば、この攻撃の基本ダメージは50ではなく90です。",
			},
			damage: 50,
		},
	],


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
