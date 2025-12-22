import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Sunflora"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Sunkern"
	},

	description: {
		en: "Since it converts sunlight into energy, it is always\nlooking in the direction of the sun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Quick-Grow Beam"
		},

		damage: 30,
		cost: ["Grass"],

		effect: {
			en: "If Quick-Grow Extract is in your discard pile, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card