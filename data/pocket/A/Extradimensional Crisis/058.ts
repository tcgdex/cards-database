import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [760],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Stufful"
	},

	description: {
		'en-us': "Once it accepts you as a friend, it tries to show\nits affection with a hug. Letting it do that is\ndangerous—it could easily shatter your bones.",
		'fr-fr': "Il serre fort contre lui ceux qu'il considère comme ses compagnons, mais ses câlins sont assez puissants pour broyer les os."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Superpowered Hug",
			'fr-fr': "Câlin Surpuissant"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
			'fr-fr': "Lancez 2 pièces. Si les deux tombent sur face, le Pokémon Actif de votre adversaire est mis K.O."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card