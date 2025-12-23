import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Lopunny"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Buneary"
	},

	description: {
		en: "Once hot seasons are over, Lopunny's coat will\nbe replaced with fur that holds a lot of insulating\nair in preparation for colder weather."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Double Kick"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card