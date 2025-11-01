import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gloom",
		fr: "Ortide"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Oddish"
	},

	description: {
		en: "Its pistils exude an incredibly foul odor.\nThe horrid stench can cause fainting at a distance\nof 1.25 miles.",
		fr: "Ses pistils sécrètent une odeur incroyablement fétide qui fait perdre connaissance à ses adversaires jusqu'à 2 km à la ronde."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage"
		},

		damage: 40,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card