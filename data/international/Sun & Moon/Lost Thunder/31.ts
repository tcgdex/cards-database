import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bee March",
				'fr-fr': "Marche Apicole",
				'es-es': "Marcha de las Abejas",
				'it-it': "Sfilata delle Api",
				'pt-br': "Marcha das Abelhas",
				'de-de': "Bienenwanderung"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Combee and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 Apitrini dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 Combee y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre Combee e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 Combee no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Wadribie und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.",
	},

	thirdParty: {
		cardmarket: 365671,
		tcgplayer: 178832
	}
}

export default card
