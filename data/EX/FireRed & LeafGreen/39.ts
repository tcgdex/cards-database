import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Protection",
				fr: "Protection d'Énergie"
			},
			effect: {
				en: "Any damage done to Metapod by attacks is reduced by 10 for each Energy card attached to Metapod. You can't reduce more than 30 damage in this way.",
				fr: "Les dégâts infligés à Chrysacier par des attaques sont réduits de 10 pour chaque carte Énergie qui lui est attachée. Vous ne pouvez pas réduire de plus de 30 dégâts de cette façon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
