import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョバンニのニドキーン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [31],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "メガキック",
			},
			damage: 40,
		},
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				ja: "ラリアットが大好きです",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は50のダメージと、少なくとも1つのジョバンニがベンチにいっぱいになっている場合、さらに50のダメージを与えます。尾の場合、この攻撃は何もしません。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
