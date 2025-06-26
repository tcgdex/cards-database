import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Vanilluxe"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Vanillish"
	},

	description: {
		en: "When its anger reaches a breaking point, this\nPokémon unleashes a fierce blizzard that freezes\nevery creature around it, be they friend or foe."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Double Spin"
		},

		damage: 80,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card