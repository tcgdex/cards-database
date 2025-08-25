import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ledian"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Ledyba"
	},

	description: {
		en: "It's said that the patterns on its back are\nrelated to the stars in the night sky, but the\ndetails of that relationship remain unclear."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Punch"
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card