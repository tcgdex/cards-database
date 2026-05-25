import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Weedle"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [13],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprise Attack"
		},

		cost: ["Grass"],
		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693561
			}
		}
	],
}

export default card