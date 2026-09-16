import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Vulpix"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	description: {
		en: "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur."
	},

	attacks: [{
		name: {
			en: "Wild Kick"
		},

		cost: ["Fire"],

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907615,
				tcgplayer: 716443
			}
		}
	],
}

export default card
