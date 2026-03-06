import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Liepard"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Purrloin"
	},

	description: {
		en: "Don't be fooled by its gorgeous fur and elegant\nfigure. This is a moody and vicious Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fasten Claws"
		},

		damage: 30,
		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card