import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Bewear",
		fr: "Chelours"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Stufful"
	},

	description: {
		en: "Once it accepts you as a friend, it tries to show\nits affection with a hug. Letting it do that is\ndangerous—it could easily shatter your bones.",
		fr: "Il serre fort contre lui ceux qu'il considère comme ses compagnons, mais ses câlins sont assez puissants pour broyer les os."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Superpowered Hug",
			fr: "Câlin Surpuissant"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
			fr: "Lancez 2 pièces. Si les deux tombent sur face, le Pokémon Actif de votre adversaire est mis K.O."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card