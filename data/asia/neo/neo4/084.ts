import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Shining Steelix",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal", "Metal", "Fighting", "Fighting"],
			name: {
				'ja-jp': "地球を砕く",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は各ベンチポケモン（あなたと相手）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、この攻撃は何もしません。いずれにせよ、Shining Steelixは次のターン中に攻撃することはできません。",
			},
			damage: 80,
		},
	],

	retreat: 4,

};

export default card
