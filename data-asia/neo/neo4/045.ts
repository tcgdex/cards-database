import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ライトラントン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [171],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "サーチライト",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、各プレイヤーは自分の捨てられた山からカードを選択し、それを手に入れることができます。",
			},
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "スパーク",
			},
			effect: {
				ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
