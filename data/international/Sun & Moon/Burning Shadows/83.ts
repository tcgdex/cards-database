import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
		'es-es': "Grimer de Alola",
		'it-it': "Grimer di Alola",
		'pt-br': "Grimer de Alola",
		'de-de': "Alola-Sleima"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Division",
				'fr-fr': "Division",
				'es-es': "División",
				'it-it': "Serie",
				'pt-br': "Divisão",
				'de-de': "Teilung"
			},
			effect: {
				'en-us': "Search your deck for Alolan Grimer and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez Tadmorv d’Alola dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Grimer de Alola y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Grimer di Alola e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por Grimer de Alola no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach Alola-Sleima und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slippery Sludge",
				'fr-fr': "Gadoue Glissante",
				'es-es': "Lodo Resbaladizo",
				'it-it': "Melma Scivolosa",
				'pt-br': "Lodo Escorregadio",
				'de-de': "Schlüpfriger Schlamm"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	retreat: 3,

	description: {
		'en-us': "A Grimer, which had been brought in to solve a problem with garbage, developed over time into this form.",
	},

	thirdParty: {
		cardmarket: 299485,
		tcgplayer: 138571
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
