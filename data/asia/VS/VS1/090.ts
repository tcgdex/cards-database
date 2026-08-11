import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カレンのタイラニター",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "踏みつけ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ピッチ",
			},
			effect: {
				'ja-jp': "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
		},
	],
};

export default card
