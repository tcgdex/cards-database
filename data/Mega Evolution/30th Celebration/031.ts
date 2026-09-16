import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	attacks: [{
		name: {
			en: "Gnaw"
		},

		cost: ["Colorless"],

		damage: 10,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907638,
				tcgplayer: 716312
			}
		}
	],
}

export default card
