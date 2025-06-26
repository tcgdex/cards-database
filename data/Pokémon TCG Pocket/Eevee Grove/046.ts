import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Liepard"
	},

	illustrator: "kawayoo",
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
			en: "Slashing Claw"
		},

		damage: 70,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card