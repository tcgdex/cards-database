import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Misty's Horsea（LV.16）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [116],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "インクスパート",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンが攻撃しようとするたびに、相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 （この効果は、防御するポケモンが進化するか、ベンチになるまで続きます。）",
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
