import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Kingdra ex",
		'fr-fr': "Hyporoi ex",
		'de-de': "Seedraking ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [230],

	hp: 150,

	stage: "Basic",
	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Genetic Memory",
				'fr-fr': "Mémoire Génétique",
				'de-de': "Genetic Memory"
			},
			effect: {
				'en-us': "Use any attack from Kingdra ex's Basic Pokémon card or Stage 1 Evolution card. (Kingdra ex doesn't have to pay for that attack's Energy cost.)",
				'fr-fr': "Utilisez n'importe quelle attaque de la carte Pokémon de base ou de la carte Évolution Niveau 1 d'Hyporoi ex. (Hyporoi ex ne paye pas le Coût en Énergie de cette attaque).",
				'de-de': "Use any attack from Kindra ex's Basic Pokémon card or Stage 1 Evolution card. (Kindra ex doesn't have to pay for that attack's Energy cost.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydrocannon",
				'fr-fr': "Canon à O",
				'de-de': "Hydrocannon"
			},
			effect: {
				'en-us': "Does 50 damage plus 20 more damage for each Water Energy attached to Kingdra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				'fr-fr': "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  attachée à Hyporoi ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				'de-de': "Does 50 damage plus 20 more damage for each  Energy attached to Kindra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86451,
				cardmarket: 275969
			},
		},
	],

}

export default card
