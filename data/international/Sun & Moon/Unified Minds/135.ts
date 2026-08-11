import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		509,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cleaning Up",
				'fr-fr': "Nettoyage",
				'es-es': "Purgar",
				'it-it': "Pulizie",
				'pt-br': "Limpar",
				'de-de': "Putzen"
			},
			effect: {
				'en-us': "Discard a Pokémon Tool card from 1 of your opponent’s Pokémon.",
				'fr-fr': "Défaussez une carte Outil Pokémon de l’un des Pokémon de votre adversaire.",
				'es-es': "Descarta 1 carta de Herramienta Pokémon de 1 de los Pokémon de tu rival.",
				'it-it': "Scarta una carta Oggetto Pokémon assegnata a uno dei Pokémon del tuo avversario.",
				'pt-br': "Descarte 1 carta de Ferramenta Pokémon de 1 dos Pokémon do seu oponente.",
				'de-de': "Lege 1 Pokémon-Ausrüstung von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

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
		'en-us': "Its cute act is a ruse. When victims let down their guard, they find their items taken. It attacks with sharp claws.",
	},

	thirdParty: {
		cardmarket: 388472,
		tcgplayer: 195106
	}
}

export default card
