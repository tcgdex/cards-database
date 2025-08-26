import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "サージ中t",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [20],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フォーカスエネルギー",
			},
			effect: {
				ja: "次のターン中に、SurgeのRaticateのダブルエッジ攻撃の損傷（基本的な損傷とそれ自体への損傷）が2倍になります。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ダブルエッジ",
			},
			effect: {
				ja: "SurgeのRaticate中tはそれ自体に20のダメージを与えます。",
			},
			damage: 40,
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
