import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga",
		fr: "Dialga",
		de: "Dialga",
		es: "Dialga",
		it: "Dialga",
		'es-mx': "Dialga"
	},

	illustrator: "toriyufu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Reversed Clock",
			fr: "Horloge Inversée",
			de: "Umkehruhr",
			es: "Reversión Temporal",
			it: "Invertitempo",
			'es-mx': "Reversión Temporal"
		},

		effect: {
			en: "Shuffle up to 3 in any combination of Pokémon and Basic Energy cards from your discard pile into your deck.",
			fr: "Mélangez avec votre deck une combinaison d'un maximum de 3 Pokémon et/ou cartes Énergie de base de votre pile de défausse.",
			de: "Mische eine beliebige Kombination aus bis zu 3 Pokémon und Basis-Energiekarten aus deinem Ablagestapel in dein Deck.",
			es: "Pon, en cualquier combinación, hasta 3 cartas de Pokémon y de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
			it: "Rimischia fino a tre fra Pokémon e carte Energia base in qualsiasi combinazione dalla tua pila degli scarti nel tuo mazzo.",
			'es-mx': "Baraja, en cualquier combinación, hasta 3 cartas de Pokémon y de Energía Básica de tu pila de descartes en tu mazo."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			de: "Schwerer Einschlag",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			'es-mx': "Impacto Pesado"
		},

		damage: 110,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card