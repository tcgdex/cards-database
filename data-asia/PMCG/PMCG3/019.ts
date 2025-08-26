import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "キングラー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [99],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "フレイル",
			},
			effect: {
				ja: "キングラーのダメージ数の数を10回ダメージします。",
			},

		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "crabhammer",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
