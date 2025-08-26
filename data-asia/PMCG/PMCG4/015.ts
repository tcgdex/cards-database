import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークチャームレオン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [5],
	hp: 50,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "テールスラップ",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				ja: "火の玉",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、このポケモンに取り付けられた火災エネルギーカードを捨ててください。尾の場合、この攻撃は何もしません。",
			},
			damage: 70,
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
