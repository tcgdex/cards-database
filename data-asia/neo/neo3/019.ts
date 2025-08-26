import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "オクリリー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [224],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "収縮します",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "オタスーカ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンが攻撃するたびに、相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 （ポケモンがこの効果を終了するというベンチまたは進化。）",
			},
			damage: 40,
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
