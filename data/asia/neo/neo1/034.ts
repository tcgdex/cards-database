import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アズマリル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [184],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "バブルシャワー",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンが麻痺し、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
