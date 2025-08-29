import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "クロイスター",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [91],
	hp: 50,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "クランプ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Water"],
			name: {
				ja: "スパイクキャノン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},

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
