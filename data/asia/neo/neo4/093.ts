import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ライトドラゴンエア",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [148],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "癒しの光",
			},
			effect: {
				ja: "ダメージカウンターがあるポケモンのそれぞれから1つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "保護波",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ダメージを含む攻撃のすべての影響を防ぎ、Light Dragonairに行われます。",
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
};

export default card
