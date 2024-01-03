import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Têtampoule",
		en: "Tadbulb",
		es: "Tadbulb",
		it: "Tadbulb",
		pt: "Tadbulb",
		de: "Blipp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Énergisant",
			en: "Energize",
			es: "Vigorizar",
			it: "Energizza",
			pt: "Energizar",
			de: "Energiezufuhr"
		},

		effect: {
			fr: "Attachez une carte Énergie Lightning de base de votre pile de défausse à ce Pokémon.",
			en: "Attach a Basic Lightning Energy card from your discard pile to this Pokémon.",
			es: "Une 1 carta de Energía Lightning Básica de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia base Lightning dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia Lightning Básica da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Basis-Lightning-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Boule Éclair",
			en: "Lightning Ball",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			pt: "Bola de Raios",
			de: "Kugelblitz"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card