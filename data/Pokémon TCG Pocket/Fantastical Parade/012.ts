import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Spewpa"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Scatterbug"
	},

	description: {
		en: "Spewpa doesn't live in a fixed location. It roams\nwhere it pleases across the fields and mountains,\nbuilding up the energy it needs to evolve."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Signs of Evolution"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put a random card that evolves from Spewpa from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card