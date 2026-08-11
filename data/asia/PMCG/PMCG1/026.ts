import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スターミー",
	},

	illustrator: "Keiji Kinebuchi",
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
				'ja-jp': "回復する",
			},
			effect: {
				'ja-jp': "この攻撃を使用するために、スターミーに取り付けられた1つの水エネルギーカードを捨てます。 Starmieからすべてのダメージカウンターを削除します。",
			},

		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "星の凍結",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575594
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577021
			}
		}
	],
};

export default card
