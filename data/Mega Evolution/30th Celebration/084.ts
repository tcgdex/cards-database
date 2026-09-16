import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Seismitoad"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [537],
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",

	description: {
		en: "The vibrating of the bumps all over its body causes earthquake-like tremors. Seismitoad and Croagunk are similar species."
	},

	attacks: [{
		name: {
			en: "Quaking Fist"
		},

		cost: ["Fighting"],

		damage: 60,

		effect: {
			en: "During your opponent's next turn, whenever they try to use a Trainer card from their hand, they flip a coin. If tails, your opponent discards that Trainer card instead of using it."
		}
	}, {
		name: {
			en: "Mega Punch"
		},

		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		damage: 180,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907691,
				tcgplayer: 716480
			}
		}
	],
}

export default card
