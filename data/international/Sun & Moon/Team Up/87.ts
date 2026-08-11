import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyèna",
		'es-es': "Mightyena",
		'it-it': "Mightyena",
		'pt-br': "Mightyena",
		'de-de': "Magnayen"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Fang",
				'fr-fr': "Croc Obscurité",
				'es-es': "Colmillo Siniestro",
				'it-it': "Zanna Oscura",
				'pt-br': "Presa da Escuridão",
				'de-de': "Finsterzahn"
			},
			effect: {
				'en-us': "Discard a random card from your opponent’s hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
				'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It chases down prey in a pack of around ten. They defeat foes with perfectly coordinated teamwork.",
	},

	thirdParty: {
		cardmarket: 369017,
		tcgplayer: 183865
	}
}

export default card
