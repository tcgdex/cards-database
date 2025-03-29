import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weedle",
		fr: "Aspicot"
	},

	illustrator: "Hajime Kusajima",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sting",
			fr: "Dard"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
		fr: "On trouve souvent ce Pokémon dans les forêts et les hautes herbes. L'aiguillon de 5 cm sur sa tête contient un venin très toxique."
	}
}

export default card
