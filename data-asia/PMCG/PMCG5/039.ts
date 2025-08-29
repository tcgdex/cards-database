import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Surgeのマグネマイト中,、 Lv.10）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [81],
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "除去パルス",
			},
			effect: {
				ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1つを選択して廃棄します。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "混乱パルス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
