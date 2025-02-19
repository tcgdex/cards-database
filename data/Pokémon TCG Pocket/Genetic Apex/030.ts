import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lilligant"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Petilil"
	},


	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Leaf Supply"
		},

		effect: {
			en: "Take a G Energy from your Energy Zone and attach it to 1 of your Benched G Pokémon."
		},

		damage: "50"
	}],


	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.",
	}
}

export default card
