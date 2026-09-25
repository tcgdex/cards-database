import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
	},

	illustrator: "DOM",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [25],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Scrappy Spark",
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 894884,
				tcgplayer: 712963
			}
		},
		{
			type: "holo",
			stamp: ["winner"],
			thirdParty: {
				cardmarket: 894885,
				tcgplayer: 716740
			}
		}
	],
}

export default card
