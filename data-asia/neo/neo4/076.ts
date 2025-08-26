import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークプリター",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [247],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "ロックタックル",
			},
			effect: {
				ja: "Dark Pupitarはそれ自体に10ダメージを与えます。 Dark Pupitarは次のターン中にこの攻撃を使用できません。",
			},
			damage: 40,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "爆発的な進化",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。次に、Dark Tyranitarという名前の進化カードをデッキに検索し、Dark Pupitarに置きます。 （これは進化する暗い生徒としてカウントされます。）その後、デッキをシャッフルします。",
			},
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
