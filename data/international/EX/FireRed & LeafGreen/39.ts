import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'de-de': "Safcon"
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
		'en-us': "Caterpie",
		'fr-fr': "Chenipan"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Energy Protection",
				'fr-fr': "Protection d'Énergie",
				'de-de': "Energy Protection"
			},
			effect: {
				'en-us': "Any damage done to Metapod by attacks is reduced by 10 for each Energy card attached to Metapod. You can't reduce more than 30 damage in this way.",
				'fr-fr': "Les dégâts infligés à Chrysacier par des attaques sont réduits de 10 pour chaque carte Énergie qui lui est attachée. Vous ne pouvez pas réduire de plus de 30 dégâts de cette façon.",
				'de-de': "Any damage done to Metapod by attacks is reduced by 10 for each Energy attached to Metapod. You can't reduce more than 30 damage in this way."
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
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'de-de': "Sharpen"
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


	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276215,
				tcgplayer: 87389
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276215,
				tcgplayer: 87389
			},
		},
	],
}

export default card
