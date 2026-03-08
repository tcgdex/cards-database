import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ledian",
		fr: "Coxyclaque"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [166],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Ledyba"
	},

	description: {
		en: "It's said that the patterns on its back are\nrelated to the stars in the night sky, but the\ndetails of that relationship remain unclear.",
		fr: "Le motif qui orne son dos aurait un lien avec les étoiles, mais nul ne sait encore en quoi consiste ce lien."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Punch",
			fr: "Koud'Poing"
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