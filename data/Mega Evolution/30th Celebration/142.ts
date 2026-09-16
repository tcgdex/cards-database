import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Gholdengo"
	},

	illustrator: "toriyufu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [1000],
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	description: {
		en: "It has a sturdy body made up of stacked coins. Gholdengo overwhelms its enemies by firing coin after coin at them in quick succession."
	},

	attacks: [{
		name: {
			en: "Celebration"
		},

		cost: ["Metal"],

		effect: {
			en: "If you have exactly 30 cards in your hand, take 2 Prize cards. If you do, shuffle your hand into your deck."
		}
	}, {
		name: {
			en: "Triple Smash"
		},

		cost: ["Metal"],

		damage: "50×",

		effect: {
			en: "Flip 3 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907750,
				tcgplayer: 716227
			}
		}
	],
}

export default card
