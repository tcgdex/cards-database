import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Froakie"
	},

	illustrator: "Kariya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [656],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw a card."
		}
	}, {
		name: {
			en: "Water Gun"
		},

		cost: ["Water"],
		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693488
			}
		}
	],
}

export default card