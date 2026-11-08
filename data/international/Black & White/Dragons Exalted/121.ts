import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Terrakion-EX",
		'fr-fr': "Terrakium-EX",
		'es-es': "Terrakion-EX",
		'it-it': "Terrakion-EX",
		'pt-br': "Terrakion-EX",
		'de-de': "Terrakium-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		639,
	],
	hp: 180,
	types: [
		"Fighting",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-Pierre",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pump-up Smash",
				'fr-fr': "Taurocharge",
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your hand to your Benched Pokémon in any way you like.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre main à vos Pokémon de Banc, de la manière que vous voulez.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
