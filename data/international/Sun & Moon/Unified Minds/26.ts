import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Victory Sign",
				'fr-fr': "V de Victoire",
				'es-es': "Señal de Victoria",
				'it-it': "Segno di Vittoria",
				'pt-br': "Sinal de Vitória",
				'de-de': "Victoryzeichen"
			},
			effect: {
				'en-us': "Search your deck for up to 2 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu’à 2 cartes Énergie de base de différents types et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Energia base di diversi tipi e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas de Energia básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
				'es-es': "Llama",
				'it-it': "Fiammata",
				'pt-br': "Chama",
				'de-de': "Flackern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
	},

	thirdParty: {
		cardmarket: 387962,
		tcgplayer: 194944
	}
}

export default card
