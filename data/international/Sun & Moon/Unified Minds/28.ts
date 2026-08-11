import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		607,
	],

	hp: 60,

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
				'en-us': "Find a Friend",
				'fr-fr': "Trouver un Ami",
				'es-es': "Encontrar un Amigo",
				'it-it': "Trovamico",
				'pt-br': "Encontre um Amigo",
				'de-de': "Freunde finden"
			},
			effect: {
				'en-us': "Search your deck for a Fire Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez un Pokémon Fire dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon Fire, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Pokémon Fire, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Pokémon Fire no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Fire-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

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
		'en-us': "While shining a light and pretending to be a guide, it leeches off the life force of any who follow it.",
	},

	thirdParty: {
		cardmarket: 387967,
		tcgplayer: 194946
	}
}

export default card
