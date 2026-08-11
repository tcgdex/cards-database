import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "幼虫",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [246],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "Leer",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ロックスロー",
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
