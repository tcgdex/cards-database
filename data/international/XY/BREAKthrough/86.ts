import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		674,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pompous Punch",
				'fr-fr': "Coup d'Poing Solennel",
				'es-es': "Puño Pomposo",
				'it-it': "Tronfiopugno",
				'pt-br': "Soco Pomposo",
				'de-de': "Pompöser Punch"
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
				'pt-br': "Descarte um card aleatório da mão do seu oponente.",
				'de-de': "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf seinen Ablagestapel."
			},
			damage: 10,

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
		'en-us': "It does its level best to glare and pull a scary face, but it can't help grinning if anyone pats its head.",
	},

	thirdParty: {
		cardmarket: 286332,
		tcgplayer: 107205
	}
}

export default card
