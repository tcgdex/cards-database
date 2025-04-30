import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cubone"
	},

	description: {
		en: "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bone Beatdown"
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card