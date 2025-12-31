import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Spearow",
		fr: "Piafabec"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "Its reckless nature leads it to stand up to\nothers—even large Pokémon—if it has to protect\nits territory.",
		fr: "Un Pokémon téméraire qui n'hésite pas à affronter des Pokémon plus gros que lui pour protéger son territoire."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Glide",
			fr: "Glissement"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card