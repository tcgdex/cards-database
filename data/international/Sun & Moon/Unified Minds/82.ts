import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'es-es': "Skorupi",
		'it-it': "Skorupi",
		'pt-br': "Skorupi",
		'de-de': "Pionskora"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		451,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'es-es': "Desarme",
				'it-it': "Privazione",
				'pt-br': "Derrubar",
				'de-de': "Abschlag"
			},
			effect: {
				'en-us': "Discard a random card from your opponent’s hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
				'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It grips prey with its tail claws and injects poison. It tenaciously hangs on until the poison takes.",
	},

	thirdParty: {
		cardmarket: 388217,
		tcgplayer: 195012
	}
}

export default card
