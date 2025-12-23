import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Silvally"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Type: Null"
	},

	description: {
		en: "This is its form once it has awakened and\nevolved. Freed from its heavy mask, its speed is\ngreatly increased."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Brave Buddies"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card