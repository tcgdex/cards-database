import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},
	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		780,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Amass",
				'fr-fr': "Amas",
				'es-es': "Amasar",
				'it-it': "Amasso",
				'pt-br': "Acumular",
				'de-de': "Anhäufen"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Cyclone",
				'fr-fr': "Cyclone d’Énergie",
				'es-es': "Ciclón Poderoso",
				'it-it': "Ciclone Potente",
				'pt-br': "Ciclone Poderoso",
				'de-de': "Kraftwirbel"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "It has a compassionate personality, but if it is angered, it completely destroys its surroundings with its intense breath.",
	},
}

export default card
