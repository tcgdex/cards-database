import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Kakuna"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sharp Sting"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
	}
}

export default card
