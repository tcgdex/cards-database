import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Licking Flames",
			fr: "Flammes Effleurantes",
			es: "Lengüetazo en Llamas",
			it: "Fiammalingua",
			pt: "Lambidas Flamejantes"
		},

		effect: {
			en: "Flip 3 coins. For each tails, discard an Energy from this Pokémon.",
			fr: "Lancez 3 pièces. Pour chaque côté pile, défaussez une Énergie de ce Pokémon.",
			es: "Lanza 3 monedas. Por cada cruz, descarta 1 Energía de este Pokémon.",
			it: "Lancia tre volte una moneta. Ogni volta che esce croce, scarta un'Energia da questo Pokémon.",
			pt: "Jogue 3 moedas. Para cada coroa, descarte uma Energia deste Pokémon."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card