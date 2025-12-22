import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Liepard"
	},

	illustrator: "AKIRA EGAWA",
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
			en: "Snatch and Flee"
		},

		damage: 60,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent reveals a random card from their hand and shuffles it into their deck. Shuffle this Pokémon into your deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card