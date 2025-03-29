import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pinsir"
	},

	illustrator: "Satoshi Shirai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		en: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Guillotine Rush"
		},

		damage: "50+",
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 40 more damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card