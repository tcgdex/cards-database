import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "pidgeot",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [18],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "翼攻撃",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ハリケーン",
			},
			effect: {
				ja: "この攻撃が防御ポケモンをノックアウトしない限り、防御ポケモンとそれに取り付けられたすべてのカードを相手の手に返します。",
			},
			damage: 30,
		},
	],


	variants : [
		{
			type: "holo",
		},
	],
};

export default card
