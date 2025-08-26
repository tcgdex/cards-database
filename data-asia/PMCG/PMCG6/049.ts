import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナの激しく",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [92],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "気体形",
			},
			effect: {
				ja: "Sabrina's Gastlyは、それに取り付けられた各サイキックエネルギーカードに対して+10 HPを取得します。サブリナのガスティリーが眠っていて、混乱し、麻痺している場合でも、このパワーは機能します。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "窒息するガス",
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
