import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

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

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energize",
			fr: "Énergisant",
			es: "Vigorizar",
			it: "Energizza",
			pt: "Energizar",
			de: "Energiezufuhr"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia Lightning da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa",
			de: "Überraschungsangriff"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691732,
		tcgplayer: 478082
	}
}

export default card