import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Sandygast",
		fr: "Bacabouh"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [769],
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "If it loses its shovel, it will stick something\nelse—like a branch—in its head to make\ndo until it finds another shovel.",
		fr: "S'il perd sa pelle, il la remplacera par un autre objet, comme une branche, en attendant d'en trouver une nouvelle."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sandy Shot",
			fr: "Tir Sableux"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card