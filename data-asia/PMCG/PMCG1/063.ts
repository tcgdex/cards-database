import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Farfetch'd",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [83],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ネギの平手打ち",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。いずれにせよ、Farfetch'dがプレイにとどまる限り、この攻撃を再び使用することはできません（BenchにFarfetch'dを置くことでさえ、再び使用することはできません）。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ポットスマッシュ",
			},
			damage: 30,
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
			cardPath: "data/Base/Base Set/27.ts"
		}
	]
};

export default card
