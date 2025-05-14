import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gloom",
		fr: "Ortide"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Drool"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
		fr: "Ses pistils sécrètent une odeur incroyablement fétide qui fait perdre connaissance à ses adversaires jusqu'à 2 km à la ronde."
	}
}

export default card
