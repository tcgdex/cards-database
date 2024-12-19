import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Turbo Edge",
			fr: "Lame Turbo",
			es: "Turbofilo",
			it: "Turbolama",
			pt: "Gume Turbo",
			de: "Turbokante"
		},

		effect: {
			en: "Attach up to 2 Basic Fighting Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie Fighting de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía Fighting Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			it: "Assegna ai tuoi Pokémon in panchina fino a due carte Energia base Fighting dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia Fighting Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			de: "Lege bis zu 2 Basis-Fighting-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	}
}

export default card