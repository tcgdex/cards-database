import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'es-es': "Jolteon",
		'it-it': "Jolteon",
		'pt-br': "Jolteon",
		'de-de': "Blitza"
	},

	illustrator: "Yuu Nishida",
	rarity: "Promo",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee"
	},

	attacks: [{
		name: {
			'en-us': "Energize",
			'fr-fr': "Énergisant",
			'es-es': "Vigorizar",
			'it-it': "Energizza",
			'pt-br': "Energizar",
			'de-de': "Energiezufuhr"
		},

		effect: {
			'en-us': "Attach a {L} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {L} de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía {L} de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia {L} dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia {L} da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 {L}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'es-es': "Trueno",
			'it-it': "Tuono",
			'pt-br': "Trovão",
			'de-de': "Donner"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		'en-us': "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes."
	},

	stage: "Stage1",
	retreat: 0,
	dexId: [135],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 547021
	}
}

export default card
