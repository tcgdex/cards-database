import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Pikachu-ex",
		en: "Pikachu ex",
		es: "Pikachu ex",
		it: "Pikachu-ex",
		pt: "Pikachu ex",
		de: "Pikachu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Pika-Poing",
			en: "Pika Punch",
			es: "Pika Puño",
			it: "Pika Pugno",
			pt: "Soco Pikachu",
			de: "Pikahieb"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Éclair Dynamique",
			en: "Dynamic Bolt",
			es: "Rayo Dinámico",
			it: "Fulmine Dinamico",
			pt: "Raio Dinâmico",
			de: "Dynamischer Blitz"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies de ce Pokémon.",
			en: "Flip a coin. If tails, discard all Energy from this Pokémon.",
			es: "Lanza 1 moneda. Si sale cruz, descarta todas las Energías de este Pokémon.",
			it: "Lancia una moneta. Se esce croce, scarta tutte le Energie da questo Pokémon.",
			pt: "Jogue uma moeda. Se sair coroa, descarte todas as Energias deste Pokémon.",
			de: "Wirf 1 Münze. Lege bei Zahl alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 220
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "N-DESIGN Inc.",

	thirdParty: {
		cardmarket: 715538
	}
}

export default card