import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのジオドード（LV.13）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [74],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "友達を呼びます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、ブロックがその名にブロックされた基本的なポケモンカードを検索し、ベンチに置くことができます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "フックショット",
			},
			effect: {
				ja: "この攻撃に抵抗を適用しないでください。 （抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
			damage: 20,
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
