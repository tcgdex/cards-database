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
		en: "Eevee"
	},

	attacks: [{
		name: {
			en: "Energize",
			fr: "Énergisant",
			es: "Vigorizar",
			it: "Energizza",
			pt: "Energize",
			de: "Energiezufuhr"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
			pt: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			de: "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			it: "Tuono",
			pt: "Thunder",
			de: "Donner"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "This Pokémon also does 30 damage to itself.",
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

	regulationMark: "D"
}

export default card
