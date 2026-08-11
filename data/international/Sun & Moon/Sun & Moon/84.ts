import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		552,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
	},

	stage: "Stage1",

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
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Fang",
				'fr-fr': "Croc Obscur",
				'es-es': "Colmillo de Oscuridad",
				'it-it': "Oscurizanna",
				'pt-br': "Presa Sombria",
				'de-de': "Fänge der Dunkelheit"
			},

			damage: 60,

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

	retreat: 2,

	description: {
		'en-us': "They move in groups of a few individuals. A female is often the leader of the group, and the males will gather food.",
	},

	thirdParty: {
		cardmarket: 295395,
		tcgplayer: 126956
	}
}

export default card
