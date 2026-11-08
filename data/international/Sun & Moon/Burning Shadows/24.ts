import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "Flip 2 coins. For each heads, put a card from your discard pile into your hand.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, ajoutez une carte de votre pile de défausse à votre main.",
				'es-es': "Lanza 2 monedas. Por cada cara, pon 1 carta de tu pila de descartes en tu mano.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Jogue 2 moedas. Para cada cara, coloque 1 carta da sua pilha de descarte na sua mão.",
				'de-de': "Wirf 2 Münzen. Nimm pro Kopf 1 Karte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes Calcinantes",
				'es-es': "Llama Abrasadora",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Chama Cauterizante",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
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

	description: {
		'en-us': "Using their very hot, flame-covered tongues, they burn through Durant's steel bodies and consume their insides.",
	},

	thirdParty: {
		cardmarket: 299430,
		tcgplayer: 138502
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
