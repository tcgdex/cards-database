import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プライスのデリビード",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [225],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "アイススロー",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンごとに、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
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
