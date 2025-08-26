import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのカダブラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [64],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "生命排水",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、残りのHPが10になるように、防御ポケモンに多くのダメージカウンターを入れます。",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "PSYSHOT",
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
