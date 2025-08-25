import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティテート",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [20],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スーパーファング",
			},
			effect: {
				ja: "防御ポケモンへの損傷は、防御ポケモンの残りのHPの半分に等しい（最も近い10に丸められています）。",
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
