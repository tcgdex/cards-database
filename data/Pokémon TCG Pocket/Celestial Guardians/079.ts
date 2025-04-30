import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Ribombee"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Cutiefly"
	},

	description: {
		en: "It makes pollen puffs from pollen and nectar. The puffs' effects depend on the type of ingredients and how much of each one is used."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fairy Wind"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 0
}

export default card