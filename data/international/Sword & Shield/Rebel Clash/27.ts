import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [58],

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Odor Sleuth",
				'fr-fr': "Flair",
				'es-es': "Rastreo",
				'it-it': "Segugio",
				'pt-br': "Farejador",
				'de-de': "Schnüffler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put a card from your discard pile into your hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
				'es-es': "Lanza 1 moneda. Si sale cara, pon 1 carta de tu pila de descartes en tu mano.",
				'it-it': "Lancia una moneta. Se esce testa, prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Jogue 1 moeda. Se sair cara, coloque 1 carta da sua pilha de descarte na sua mão.",
				'de-de': "Wirf 1 Münze. Nimm bei Kopf 1 Karte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Claws",
				'fr-fr': "Griffes Enflammées",
				'es-es': "Garras de Fuego",
				'it-it': "Artigli Infuocati",
				'pt-br': "Garras de Fogo",
				'de-de': "Feuerkrallen"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457588,
				tcgplayer: 213103
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457588,
				tcgplayer: 213103
			}
		},
	],
}

export default card
