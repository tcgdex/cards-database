import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has a small stomach. If it isn't constantly eating the seeds it keeps in its pockets, it will get hungry immediately."
	},

	attacks: [{
		name: {
			en: "Select a Snack"
		},

		cost: ["Colorless"],

		effect: {
			en: "Discard the top 3 cards of your deck and put 1 of them into your hand."
		}
	}, {
		name: {
			en: "Slap"
		},

		cost: ["Lightning"],

		damage: 30,
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
				cardmarket: 907743,
				tcgplayer: 716223
			}
		}
	],
}

export default card
