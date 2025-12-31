import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dubwool"
	},

	illustrator: "You Iribi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Wooloo"
	},

	description: {
		en: "Its majestic horns are meant only to impress the\nopposite gender. They never see use in battle."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Boundless Power"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card