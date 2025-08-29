import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカの奇妙な（LV.10）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "奇妙な粉",
			},
			effect: {
				ja: "コインをひっくり返します。  頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは今眠っています。",
			},
			damage: 10,
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
