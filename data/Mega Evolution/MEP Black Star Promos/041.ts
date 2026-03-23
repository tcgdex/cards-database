import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	// TODO: incomplete data (Pokepedia redlink)
	name: {
		en: "Chimchar",
		fr: "Ouisticram"
	},

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [390],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Combo-Griffe",
			},
			damage: "20x",
			effect: {
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts poour chaque côté face.",
			},
		},
	],

	regulationMark: "J"
}

export default card
