import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗い電極",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [101],
	hp: 60,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ローリングタックル",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "エネルギー爆弾",
			},
			effect: {
				ja: "暗い電極に取り付けられたすべてのエネルギーカードを取り、ベンチポケモンに取り付けます（どんな方法でも）。ベンチ付きポケモンがない場合は、暗い電極に取り付けられたすべてのエネルギーカードを捨ててください。",
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
};

export default card
