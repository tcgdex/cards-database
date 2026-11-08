import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Thundurus-EX",
		'fr-fr': "Fulguris-EX",
		'es-es': "Thundurus-EX",
		'it-it': "Thundurus-EX",
		'pt-br': "Thundurus-EX",
		'de-de': "Voltolos-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		642,
	],
	hp: 170,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Raiden Knuckle",
				'fr-fr': "Appel Foudroyant",
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to 1 of your Benched Team Plasma Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à 1 de vos Pokémon de la Team Plasma sur votre Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunderous Noise",
				'fr-fr': "Grondement Tonitruant",
			},
			effect: {
				'en-us': "If this Pok��mon has any Plasma Energy attached to it, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Si de l'Énergie Plasma est attachée à ce Pokémon, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
