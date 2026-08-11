import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [380],
	hp: 80,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Assist",
				'fr-fr': "Assist-Énergie"
			},
			effect: {
				'en-us': "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie de base et attachez-la à 1 des Pokémon de votre Banc."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Infinite Wind",
				'fr-fr': "Vent éternel"
			},
			effect: {
				'en-us': "If Latios is on your Bench, remove 2 damage counters from each of your Benched Pokémon.",
				'fr-fr': "Si Latios est sur votre Banc, retirez 2 marqueurs de dégât à chacun de vos Pokémon de Banc."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It communicates using telepathy. Its body is covered in down that refracts light to make it invisible."
	},

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				cardmarket: 275616,
				tcgplayer: 97705
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 86653
			}
		}
	],

}

export default card
