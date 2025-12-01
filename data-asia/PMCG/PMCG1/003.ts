import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "メタポッド",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [11],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "硬直",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にメタポッドに与えられたすべての損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "スタン胞子",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/54.ts"
		}
	]
};

export default card
