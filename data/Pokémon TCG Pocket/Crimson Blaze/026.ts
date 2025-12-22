import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magneton"
	},

	description: {
		en: "Exposure to a special magnetic field changed\nMagneton's molecular structure, turning it into\nMagnezone."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Mirror Shot"
		},

		damage: 90,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card