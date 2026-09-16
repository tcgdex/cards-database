import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "It loves things that sparkle. When it sees a shiny object, the gold coin on its head shines, too."
	},

	attacks: [{
		name: {
			en: "Pay Day"
		},

		cost: ["Colorless", "Colorless"],

		damage: 30,

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907720,
				tcgplayer: 714356
			}
		}
	],
}

export default card
