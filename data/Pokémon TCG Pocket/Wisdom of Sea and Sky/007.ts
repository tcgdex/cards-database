import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Pinsir",
		fr: "Scarabrute"
	},

	illustrator: "Toshinao Aoki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		en: "These Pokémon judge one another based on\npincers. Thicker, more impressive pincers make\nfor more popularity with the opposite gender.",
		fr: "Ses cornes déterminent son rang au sein du groupe. Plus elles sont imposantes, plus les membres du sexe opposé l'apprécient."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Guillotine",
			fr: "Guillotine"
		},

		damage: 70,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card