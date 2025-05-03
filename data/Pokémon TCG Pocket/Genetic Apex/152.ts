import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Cubone"
	},


	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Bone Beatdown"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
	}
}

export default card
