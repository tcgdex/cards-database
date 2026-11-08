import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [599],

	name: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'es-es': "Klink",
		'it-it': "Klink",
		'pt-br': "Klink",
		'de-de': "Klikk"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Call for Backup",
				'fr-fr': "Renforts",
				'es-es': "Pedir Refuerzos",
				'it-it': "Rinforzi",
				'pt-br': "Chamar Reforço",
				'de-de': "Back-up"
			},
			effect: {
				'en-us': "Search your deck for a Metal Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck un Pokémon Metal, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon Metal, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Pokémon Metal, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Pokémon Metal no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Metal-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The two minigears that compose this Pokémon are closer than twins. They mesh well only with each other."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483504,
				tcgplayer: 219385
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483504,
				tcgplayer: 219385
			}
		},
	],
}

export default card
