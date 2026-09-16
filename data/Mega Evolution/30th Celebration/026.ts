import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	attacks: [{
		name: {
			en: "Peer At"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent reveals their hand."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907633,
				tcgplayer: 712936
			}
		}
	],
}

export default card
