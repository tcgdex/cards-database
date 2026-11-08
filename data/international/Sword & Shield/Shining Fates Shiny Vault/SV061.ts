import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [886],
	set: Set,

	name: {
		'fr-fr': "Dispareptil",
		'en-us': "Drakloak",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Fantyrm",
		'en-us': "Dreepy"
	},

	attacks: [{
		name: {
			'fr-fr': "Citation",
			'en-us': "Summon",
			'es-es': "Llamamiento",
			'it-it': "Invocazione",
			'pt-br': "Convidar",
			'de-de': "Herbeirufen"
		},

		effect: {
			'fr-fr': "Cherchez un Fantyrm dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Dreepy and put it onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 Dreepy y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Dreepy e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Dreepy no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Grolldra und lege es auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "It's capable of flying faster than 120 mph. It battles alongside Dreepy and dotes on them until they successfully evolve."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539693,
				tcgplayer: 232428
			}
		},
	],
}

export default card
