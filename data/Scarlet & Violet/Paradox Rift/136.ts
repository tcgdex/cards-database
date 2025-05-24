import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		en: "Zacian",
		fr: "Zacian",
		es: "Zacian",
		it: "Zacian",
		pt: "Zacian",
		de: "Zacian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Iron Roar",
			fr: "Rugissement de Fer",
			es: "Rugido Férreo",
			it: "Ruggito Ferreo",
			pt: "Rugido Férreo",
			de: "Eisengebrüll"
		},

		effect: {
			en: "Attach a Basic {M} Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie {M} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía {M} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {M} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {M} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-{M}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Brave Blade",
			fr: "Lame Vaillante",
			es: "Cuchilla Osada",
			it: "Baldalama",
			pt: "Lâmina Valente",
			de: "Couragierte Klinge"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Tonji Matsuno"
}

export default card