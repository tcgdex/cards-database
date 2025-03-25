import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kakuna",
		fr: "Coconfort"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Weedle"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
		fr: "Incapable de se déplacer de lui-même, il se défend en durcissant sa carapace."
	}
}

export default card
