import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		es: "Deerling",
		it: "Deerling",
		pt: "Deerling"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			pt: "Baque"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Leaf Litter Tackle",
			fr: "Charge Amas de Feuilles",
			es: "Placaje Hojarasca",
			it: "Defogliazione",
			pt: "Joga Folha no Lixo"
		},

		effect: {
			en: "Discard a Grass Energy from this Pokémon.",
			fr: "Défaussez une Énergie Grass de ce Pokémon.",
			es: "Descarta 1 Energía Grass de este Pokémon.",
			it: "Scarta un'Energia Grass da questo Pokémon.",
			pt: "Descarte uma Energia Grass deste Pokémon."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card