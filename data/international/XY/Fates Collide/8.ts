import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
		'es-es': "Deerling",
		'it-it': "Deerling",
		'pt-br': "Deerling",
		'de-de': "Sesokitz"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		585,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Find a Friend",
				'fr-fr': "Trouver un Ami",
				'es-es': "Encontrar un Amigo",
				'it-it': "Trovamico",
				'pt-br': "Encontre um Amigo",
				'de-de': "Freunde finden"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um Pokémon, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The turning of the seasons changes the color and scent of this Pokémon's fur. People use it to mark the seasons.",
	},

	thirdParty: {
		cardmarket: 289834,
		tcgplayer: 117771
	}
}

export default card
