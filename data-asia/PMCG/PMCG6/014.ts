import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのゴルバット",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [42],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "ソニックスクリーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
