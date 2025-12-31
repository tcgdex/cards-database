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
	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},
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
			en: "Attach up to 2 Basic {F} Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			it: "Assegna ai tuoi Pokémon in panchina fino a due carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			de: "Lege bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Yoshioka",

	thirdParty: {
		cardmarket: 760720
	}
}

export default card