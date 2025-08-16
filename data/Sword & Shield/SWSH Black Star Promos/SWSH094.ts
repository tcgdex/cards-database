import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Yuu Nishida",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		pt: "Eevee",
		it: "Eevee"
	},

	attacks: [{
		name: {
			en: "Energize",
			fr: "Énergisant",
			es: "Vigorizar",
			it: "Energizza",
			pt: "Energizar",
			de: "Energiezufuhr"
		},

		effect: {
			en: "Attach a {L} Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie {L} de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía {L} de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia {L} dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia {L} da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 {L}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			it: "Tuono",
			pt: "Trovão",
			de: "Donner"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		en: "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes."
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
