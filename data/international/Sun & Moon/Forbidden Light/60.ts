import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension",
				'es-es': "Ascensión",
				'it-it': "Ascensione",
				'pt-br': "Ascensão",
				'de-de': "Aufstieg"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.",
	},

	thirdParty: {
		cardmarket: 355578,
		tcgplayer: 165712
	}
}

export default card
