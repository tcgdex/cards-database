import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [13],

	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bug Hunch",
				'fr-fr': "Insec'tuition",
				'es-es': "Instinto Bicho",
				'it-it': "Sensinsetto",
				'pt-br': "Pressentimento de Inseto",
				'de-de': "Käferwahrnehmung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Grass Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon Grass, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon Grass, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon Grass, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Pokémon Grass no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Grass-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
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
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511425,
				tcgplayer: 226360
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511425,
				tcgplayer: 226360
			}
		},
	],
}

export default card
