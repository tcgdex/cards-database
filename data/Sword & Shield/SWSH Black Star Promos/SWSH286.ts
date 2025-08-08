import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		fr: "Pikachu VMAX",
		de: "Pikachu VMAX",
		es: "Pikachu VMAX",
		pt: "Pikachu VMAX",
		it: "Pikachu VMAX",
		en: "Pikachu VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Pikachu-V",
		de: "Pikachu-V",
		es: "Pikachu V",
		pt: "Pikachu V",
		it: "Pikachu-V",
		en: "Pikachu V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Queue Chargeuse",
			de: "Schweifladung",
			es: "Carga de Cola",
			pt: "Carga de Cauda",
			it: "Coda Elettrizzante",
			en: "Tail Charge"
		},

		effect: {
			fr: "Attachez jusqu'à 3 cartes Énergie {L} de votre pile de défausse à l'un de vos Pokémon.",
			de: "Lege bis zu 3 {L}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an.",
			es: "Une hasta 3 cartas de Energía {L} de tu pila de descartes a 1 de tus Pokémon.",
			pt: "Ligue até 3 cartas de Energia {L} da sua pilha de descarte a 1 dos seus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon fino a tre carte Energia {L} dalla tua pila degli scarti.",
			en: "Attach up to 3 {L} Energy cards from your discard pile to 1 of your Pokémon."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Fatal-Foudre G-Max",
			de: "Giga-Donner",
			es: "Gigatrueno",
			pt: "Trovão G-Max",
			it: "Gigatuono",
			en: "G-Max Thunder"
		},

		damage: 250
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card