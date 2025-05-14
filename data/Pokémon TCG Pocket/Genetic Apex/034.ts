import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche"
	},


	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
		fr: "Il est très brutal. En combat, il se sert de ses griffes acérées et de sa queue enflammée pour mettre en pièces ses adversaires."
	}
}

export default card
