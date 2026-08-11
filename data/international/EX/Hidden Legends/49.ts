import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'de-de': "Starmie"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [121],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Arrow",
				'fr-fr': "Flèche d'eau",
				'de-de': "Water Arrow"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Star",
				'fr-fr': "Étoile multicolore",
				'de-de': "Rainbow Star"
			},
			effect: {
				'en-us': "Does 50 damage plus 10 more damage for each type of basic Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque type d'Énergie de base attaché au Pokémon Défenseur.",
				'de-de': "Dies 50 damage plus 10 more damage for each type of basic Energy attached to the Defending Pokémon."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89532,
				cardmarket: 276123
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89532,
				cardmarket: 276123
			}
		},
	]
}

export default card
