import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		'fr-fr': "Germéclat",
		'en-us': "Glimmet",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Ascension",
			'en-us': "Ascension",
			'es-es': "Ascensión",
			'it-it': "Ascensione",
			'pt-br': "Ascensão",
			'de-de': "Aufstieg"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715599,
				tcgplayer: 497539,
				cardtrader: 248771
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715599,
				tcgplayer: 497539,
				cardtrader: 248771
			}
		},
	],

	illustrator: "Mizue",

	description: {
		'en-us': "It absorbs nutrients from cave walls. The petals it wears are made of crystallized poison.",
	},
}

export default card
