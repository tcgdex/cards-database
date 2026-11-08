import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダークライチュ",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [26],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				'ja-jp': "サプライズサンダー",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、別のコインを裏返します。 2番目のコインがヘッドの場合、この攻撃は相手のベンチポケモンのそれぞれに20のダメージを与えます。 2番目のコインがテールの場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
