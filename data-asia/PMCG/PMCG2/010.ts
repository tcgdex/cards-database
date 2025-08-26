import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "パラセクト",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [47],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "胞子",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
