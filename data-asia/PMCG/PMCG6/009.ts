import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのタンゲラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [114],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "スリープパウダー",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "つるのをつかむ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、2枚のカードを描きます。",
			},
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
