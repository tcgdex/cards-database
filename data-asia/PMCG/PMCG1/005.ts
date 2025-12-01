import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドランm",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [32],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "ホーンハザード",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
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

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/55.ts"
		}
	]
};

export default card
