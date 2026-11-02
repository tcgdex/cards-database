import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Bidoof",
		fr: "Keunotor"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [399],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "With nerves of steel, nothing can perturb it. It is\nmore agile and active than it appears.",
		fr: "Rien ne peut perturber ses nerfs d'acier.\\nIl est plus agile et énergique qu'il n'y paraît."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Super Fang",
			fr: "Croc Fatal"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Halve your opponent's Active Pokémon's remaining HP, rounded down.",
			fr: "Réduisez de moitié les PV restants du Pokémon Actif de votre adversaire en arrondissant au nombre inférieur."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card