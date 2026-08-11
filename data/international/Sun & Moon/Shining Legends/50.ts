import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'de-de': "Zurrokex"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		559,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
				'es-es': "Llamar a la Familia",
				'it-it': "Cerca Famiglia",
				'pt-br': "Chamar a Família",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d’Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 20,

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
		'en-us': "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck.",
	},

	thirdParty: {
		cardmarket: 302188,
		tcgplayer: 146712
	}
}

export default card
