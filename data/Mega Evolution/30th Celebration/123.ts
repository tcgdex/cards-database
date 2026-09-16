import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Zoroark"
	},

	illustrator: "Kamome Shirahama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [571],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	description: {
		en: "With its disheveled white fur, it looks like an embodiment of death. Heedless of its own safety, Zoroark attacks its nemeses with a bitter energy so intense, it lacerates Zoroark's own body."
	},

	attacks: [{
		name: {
			en: "Scratch"
		},

		cost: ["Colorless"],

		damage: 30,
	}, {
		name: {
			en: "Swirling Resentment"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Place damage counters on your opponent's Active Pokémon until its remaining HP is 50."
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
				cardmarket: 907730,
				tcgplayer: 716512
			}
		}
	],
}

export default card
