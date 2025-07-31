import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Spearow"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "Its reckless nature leads it to stand up to\nothers—even large Pokémon—if it has to protect\nits territory."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Glide"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card