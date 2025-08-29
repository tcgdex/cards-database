import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのコフィン（c）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [109],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "臭いガス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は各ベンチポケモン（あなた自身を含む）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
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
