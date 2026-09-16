import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Meowth"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	description: {
		en: "It's accustomed to luxury because it used to live with Alolan royalty. As a result, it's very picky about food."
	},

	attacks: [{
		name: {
			en: "Pay Day"
		},

		damage: 10,

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907696,
				tcgplayer: 714359
			}
		}
	],
}

export default card
