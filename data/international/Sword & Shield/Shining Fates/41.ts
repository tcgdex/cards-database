import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [109],
	set: Set,

	name: {
		'fr-fr': "Smogo",
		'en-us': "Koffing",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	attacks: [{
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
			'pt-br': "Procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539228,
				tcgplayer: 232497
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539228,
				tcgplayer: 232497
			}
		},
	],
}

export default card
