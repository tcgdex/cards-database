import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [872],
	set: Set,

	name: {
		'fr-fr': "Frissonille",
		'en-us': "Snom",
		'es-es': "Snom",
		'it-it': "Snom",
		'pt-br': "Snom",
		'de-de': "Snomnom"
	},

	illustrator: "Yumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Appel à la Famille",
			'en-us': "Call for Family",
			'es-es': "Llamar a la Familia",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família",
			'de-de': "Familienruf"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It spits out thread imbued with a frigid sort of energy and uses it to tie its body to branches, disguising itself as an icicle while it sleeps."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539553,
				tcgplayer: 232387
			}
		},
	],
}

export default card
