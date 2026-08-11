import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'de-de': "Flegmon"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [79],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fishing Tail",
				'fr-fr': "Queue de pêche",
				'de-de': "Angelschweif"
			},
			effect: {
				'en-us': "Search your discard pile for a Baby Pokémon, Basic Pokémon, Evolution card, or basic Energy card, show it to your opponent, and then put it into your hand.",
				'fr-fr': "Cherchez dans votre pile de défausse une carte Bébé Pokémon, Pokémon de base ou Évolution, ou une Carte Énergie de base. Montrez-la à votre adversaire et ajoutez-la ensuite à votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach einem Baby-Pokémon, einem Basis-Pokémon, einer Entwicklungskarte oder einer Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89325,
				cardmarket: 275184
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89325,
				cardmarket: 275184
			}
		},
	]
}

export default card
