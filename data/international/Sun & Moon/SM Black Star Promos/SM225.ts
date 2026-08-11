import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Victini",
		'en-us': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},
	illustrator: "nagimiso",
	rarity: "Promo",
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
				'fr-fr': "V de Victoire",
				'en-us': "Victory Sign",
				'es-es': "Señal de Victoria",
				'it-it': "Segno di Vittoria",
				'pt-br': "Sinal de Vitória",
				'de-de': "Victoryzeichen"
			},
			effect: {
				'fr-fr': "Cherchez dans votre deck jusqu’à 2 cartes Énergie de base de différents types et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				'en-us': "Search your deck for up to 2 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
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
				'fr-fr': "Flamboiement",
				'en-us': "Flare",
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
}

export default card
