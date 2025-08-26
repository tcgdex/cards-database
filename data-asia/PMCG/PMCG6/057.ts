import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョヴァンニのマチュップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [66],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "チョップ",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "フューリーパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、この攻撃は20倍のダメージ数のダメージ数がジョバンニのマチュップのカウンターカウンターになります。",
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
