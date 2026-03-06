import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Dwebble",
		fr: "Crabicoque"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [557],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "It makes a hole in a suitable rock. If that rock\nbreaks, the Pokémon remains agitated until it\nlocates a replacement.",
		fr: "Il perce un caillou et s'en sert comme maison. Quand on lui casse, il est anxieux jusqu'à ce qu'il en trouve un autre."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sand Spray",
			fr: "Jet Sableux"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card