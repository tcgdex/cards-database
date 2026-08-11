import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattata d’Alola",
		'es-es': "Rattata de Alola",
		'it-it': "Rattata di Alola",
		'pt-br': "Rattata de Alola",
		'de-de': "Alola-Rattfratz"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Call for the Boss",
				'fr-fr': "Appel au Boss",
				'es-es': "Llamar al Jefe",
				'it-it': "Chiama il Boss",
				'pt-br': "Chamar o Chefão",
				'de-de': "Ruf den Boss"
			},
			effect: {
				'en-us': "Search your deck for Alolan Raticate or Alolan Raticate-GX, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez un Rattatac d’Alola ou un Rattatac d’Alola-GX dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Raticate de Alola o 1 Raticate de Alola-GX, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Raticate di Alola o un Raticate di Alola-GX, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por Raticate de Alola ou Raticate de Alola-GX no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach Alola-Rattikarl oder Alola-Rattikarl-GX, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
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
		'en-us': "When the sun goes down, it becomes active. It runs around town on a chase for good food for the boss of its nest—Raticate.",
	},

	thirdParty: {
		cardmarket: 361329,
		tcgplayer: 170906
	}
}

export default card
