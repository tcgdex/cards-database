import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フラフィー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [180],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "電動パンチ",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				'ja-jp': "テールショック",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
