import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Maushold"
	},

	illustrator: "osare",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [925],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	description: {
		en: "The larger pair protects the little ones during battles. When facing strong opponents, the whole group will join the fight."
	},

	attacks: [{
		name: {
			en: "Gnaw Together"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin for each Maushold you have in play. For each heads, discard the top 2 cards of your opponent's deck."
		}
	}, {
		name: {
			en: "Pound"
		},

		cost: ["Colorless"],

		damage: 40,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907753,
				tcgplayer: 716228
			}
		}
	],
}

export default card
