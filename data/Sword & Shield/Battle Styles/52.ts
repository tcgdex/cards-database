import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Yamper",
		fr: "Voltoutou",
		es: "Yamper",
		it: "Yamper",
		pt: "Yamper",
		de: "Voldi"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Ball Search",
			fr: "Recherche de Balls",
			es: "Búsqueda de Bolas",
			it: "Cerca Ball",
			pt: "Buscar a Bola",
			de: "Ballsuche"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Poké Ball card, a Great Ball card, or 1 of each from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez ajouter une carte Poké Ball, une carte Super Ball, ou une de chaque, de votre pile de défausse à votre main.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes poner 1 carta de Poké Ball, 1 carta de Super Ball o 1 de cada una de tu pila de descartes en tu mano.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi prendere una carta Poké Ball, una carta Mega Ball o entrambe dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá colocar 1 carta Poké Bola, 1 carta Grande Bola, ou 1 de cada da sua pilha de descarte na sua mão.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Pokéball-Karte, 1 Superball-Karte oder von beiden 1 aus deinem Ablagestapel auf deine Hand nehmen."
		}
	}],

	attacks: [{
		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			pt: "Baque",
			de: "Plumps"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity."
	}
}

export default card