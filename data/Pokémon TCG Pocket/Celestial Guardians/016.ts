import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Morelull"
	},

	illustrator: "You Iribi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Pokémon living in the forest eat the delicious caps on Morelull's head. The caps regrow overnight."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card