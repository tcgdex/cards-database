import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "articuno",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [144],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "ダイヤモンドダスト",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンは麻痺し、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
