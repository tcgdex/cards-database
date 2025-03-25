import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard",
		fr: "Dracaufeu"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel"
	},


	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin",
			fr: "Danse Flammes"
		},

		effect: {
			en: "Discard 2 R Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies R de ce Pokémon."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
		fr: "Son souffle brûlant peut faire fondre la roche. Il est parfois la cause d'incendies de forêt."
	}
}

export default card
