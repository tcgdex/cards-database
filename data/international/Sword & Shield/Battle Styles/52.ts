import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [835],
	set: Set,

	name: {
		'en-us': "Yamper",
		'fr-fr': "Voltoutou",
		'es-es': "Yamper",
		'it-it': "Yamper",
		'pt-br': "Yamper",
		'de-de': "Voldi"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ball Search",
			'fr-fr': "Recherche de Balls",
			'es-es': "Búsqueda de Bolas",
			'it-it': "Cerca Ball",
			'pt-br': "Buscar a Bola",
			'de-de': "Ballsuche"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Poké Ball card, a Great Ball card, or 1 of each from your discard pile into your hand.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez ajouter une carte Poké Ball, une carte Super Ball, ou une de chaque, de votre pile de défausse à votre main.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes poner 1 carta de Poké Ball, 1 carta de Super Ball o 1 de cada una de tu pila de descartes en tu mano.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi prendere una carta Poké Ball, una carta Mega Ball o entrambe dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá colocar 1 carta Poké Bola, 1 carta Grande Bola, ou 1 de cada da sua pilha de descarte na sua mão.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Pokéball-Karte, 1 Superball-Karte oder von beiden 1 aus deinem Ablagestapel auf deine Hand nehmen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545371,
				tcgplayer: 234209
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545371,
				tcgplayer: 234209
			}
		},
	],
}

export default card
