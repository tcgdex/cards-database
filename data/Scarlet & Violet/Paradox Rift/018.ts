import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Wo-Chien",
		fr: "Chongjian",
		es: "Wo-Chien",
		it: "Wo-Chien",
		pt: "Wo-Chien",
		de: "Chongjian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leaf Bringer",
			fr: "Porteur de Feuilles",
			es: "Portador de Hojas",
			it: "Portafoglia",
			pt: "Emissário das Folhas",
			de: "Laubbringer"
		},

		effect: {
			en: "Attach up to 2 Basic Grass Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie Grass de base de votre pile de défausse à l'un de vos Pokémon.",
			es: "Une hasta 2 cartas de Energía Grass Básica de tu pila de descartes a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon fino a due carte Energia base Grass dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia Grass Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Lege bis zu 2 Basis-Grass-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			en: "Binding Greed",
			fr: "Avidité Contraignante",
			es: "Avaricia Vinculante",
			it: "Vincolo Avido",
			pt: "Gula Aprisionante",
			de: "Fesselnde Gier"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon cost ColorlessColorless more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent ColorlessColorless de plus.",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan ColorlessColorless más.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore aumenta di ColorlessColorless.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão ColorlessColorless a mais.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um ColorlessColorless."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card