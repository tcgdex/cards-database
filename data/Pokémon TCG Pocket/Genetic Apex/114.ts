import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Clefable"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Clefairy"
	},


	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Magical Shot"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
	}
}

export default card
