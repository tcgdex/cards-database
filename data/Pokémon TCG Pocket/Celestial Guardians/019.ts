import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Steenee"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Bounsweet"
	},

	description: {
		en: "Steenee spreads a sweet scent that makes others feel invigorated. This same scent is popular for antiperspirants."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Double Spin"
		},

		damage: 30,
		cost: ["Grass"],

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card