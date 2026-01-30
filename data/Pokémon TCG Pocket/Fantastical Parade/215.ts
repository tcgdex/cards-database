import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Clefable"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Clefairy"
	},

	description: {
		en: "A timid fairy Pokémon that is rarely seen, it will\nrun and hide the moment it senses people."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Magical Shot"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card