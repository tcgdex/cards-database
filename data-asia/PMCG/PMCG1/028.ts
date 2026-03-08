import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "PoliWhirl",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [61],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "健忘症",
			},
			effect: {
				ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
			},

		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "doubleslap",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},

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
			cardPath: "data/Base/Base Set/38.ts"
		}
	]
};

export default card
