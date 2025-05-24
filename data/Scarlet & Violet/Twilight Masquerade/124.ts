import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Varoom",
		fr: "Vrombi",
		es: "Varoom",
		it: "Varoom",
		pt: "Varoom",
		de: "Knattox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Metal Coating",
			fr: "Revêtement Métal",
			es: "Recubrimiento Metálico",
			it: "Metalrivestimento",
			pt: "Camada Metálica",
			de: "Metallbeschichtung"
		},

		effect: {
			en: "Attach a Basic {M} Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie {M} de base de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía {M} Básica de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia base {M} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {M} Básica da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Basis-{M}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Shigenori Negishi"
}

export default card