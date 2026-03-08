import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon-Z"
	},

	illustrator: "Shibuzoh.",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2"
	},

	description: {
		en: "Porygon-Z had a program installed to allow it to\nmove between dimensions, but the program also\ncaused instability in Porygon-Z's behavior."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Cyberjack"
		},

		damage: 20,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each Trainer card in your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card