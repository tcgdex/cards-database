import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [736],
	set: Set,

	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Asako Ito",

	description: {
		en: "It uses its big jaws to dig nests into the forest floor, and it loves to feed on sweet tree sap."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energize",
			fr: "Énergisant",
			de: "Energiezufuhr",
			es: "Vigorizar",
			pt: "Energizar",
			it: "Energizza"
		},

		effect: {
			en: "Attach a {L} Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie {L} de votre pile de défausse à ce Pokémon.",
			de: "Lege 1 {L}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			es: "Une 1 carta de Energía {L} de tu pila de descartes a este Pokémon.",
			pt: "Ligue 1 carta de Energia {L} da sua pilha de descarte a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia {L} dalla tua pila degli scarti."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			de: "Überraschungsangriff",
			es: "Ataque Sorpresa",
			pt: "Ataque Surpresa",
			it: "Attacco a Sorpresa"
		},

		damage: 50,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card