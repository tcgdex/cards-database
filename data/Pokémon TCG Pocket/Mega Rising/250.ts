import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rufflet",
		fr: "Furaiglon"
	},

	illustrator: "Saboteri",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [627],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "With its sharp claws, this Pokémon pierces its\nprey, and then it pecks at them. Although it also\nconsumes berries, it's a carnivore at heart."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card