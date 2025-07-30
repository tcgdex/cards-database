import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Jirachi",
		fr: "Jirachi",
		es: "Jirachi",
		it: "Jirachi",
		pt: "Jirachi",
		de: "Jirachi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Swelling Wish",
			fr: "Souhait Grandissant",
			es: "Deseo Rebosante",
			it: "Desiderio Amplificato",
			pt: "Desejo Crescente",
			de: "Wachsender Wunsch"
		},

		effect: {
			en: "Attach a Basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			it: "Sberla",
			pt: "Tapa",
			de: "Hieb"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Kuroimori",

	thirdParty: {
		cardmarket: 785952
	}
}

export default card
