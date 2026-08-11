import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブレインの染色",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [157],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "爪のスワイプ",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				'ja-jp': "熱気",
			},
			effect: {
				'ja-jp': "ブレインの染色物質に取り付けられた1つの消防エネルギーカードを捨てます。対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

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
