import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "articuno",
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
				ja: "ダイヤモンドダスト",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは麻痺し、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
