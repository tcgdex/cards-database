import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [300],

	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Drawup Power",
				'fr-fr': "Pouvoir Bloquant",
				'es-es': "Extraer Poder",
				'it-it': "Prelievo Energetico",
				'pt-br': "Poder de Içamento",
				'de-de': "Kraft aufziehen"
			},
			effect: {
				'en-us': "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cat Kick",
				'fr-fr': "Coup d'Patte",
				'es-es': "Patada Gato",
				'it-it': "Calciogatto",
				'pt-br': "Chute do Gato",
				'de-de': "Katzenkick"
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

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It shows its cute side by chasing its own tail until it gets dizzy."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483584,
				tcgplayer: 219341
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483584,
				tcgplayer: 219341
			}
		},
	],
}

export default card
