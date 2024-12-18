import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable",
		fr: "Crabominable",
		es: "Crabominable",
		it: "Crabominable",
		pt: "Crabominable",
		de: "Krawell"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Food Prep",
			fr: "Préparation de Repas",
			es: "Preparar la Comida",
			it: "Preparacibo",
			pt: "Preparação de Marmitas",
			de: "Zubereitung"
		},

		effect: {
			en: "Attacks used by this Pokémon cost Colorless less for each Kofu card in your discard pile.",
			fr: "Les attaques utilisées par ce Pokémon coûtent Colorless de moins pour chaque carte Kombu dans votre pile de défausse.",
			es: "Los ataques usados por este Pokémon cuestan Colorless menos por cada carta de Fuco en tu pila de descartes.",
			it: "Il costo degli attacchi usati da questo Pokémon è ridotto di Colorless per ogni carta Algaro nella tua pila degli scarti.",
			pt: "Os ataques usados por este Pokémon custam Colorless a menos para cada carta Álgaro na sua pilha de descarte.",
			de: "Die Kosten der von diesem Pokémon eingesetzten Attacken verringern sich für jede Kombu-Karte in deinem Ablagestapel um Colorless."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Haymaker",
			fr: "Coup de Poing Fracassant",
			es: "Golpazo",
			it: "Pugno Tremendo",
			pt: "Golpe Arrasador",
			de: "Schwinger"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Haymaker.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup de Poing Fracassant.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpazo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugno Tremendo.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Arrasador.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schwinger nicht einsetzen."
		},

		damage: 250
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
	}
}

export default card
