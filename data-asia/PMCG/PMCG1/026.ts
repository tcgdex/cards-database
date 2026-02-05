import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "スターミー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [121],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "回復する",
			},
			effect: {
				ja: "この攻撃を使用するために、スターミーに取り付けられた1つの水エネルギーカードを捨てます。 Starmieからすべてのダメージカウンターを削除します。",
			},

		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "星の凍結",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
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

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/64.ts"
		}
	]
};

export default card
