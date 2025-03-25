import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix"
	},


	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes"
		},

		effect: {
			en: "Discard 1 R Energy from this Pokémon.",
			fr: "Défaussez une Énergie R de ce Pokémon."
		},

		damage: "90"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
		fr: "On dit qu'il vit 1 000 ans et que chacune de ses queues a un pouvoir magique."
	},

}

export default card
