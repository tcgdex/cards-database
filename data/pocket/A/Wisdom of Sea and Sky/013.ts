import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [187],
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "Outside of cold regions, Hoppip can be found\npractically everywhere. This is because the wind\ncarries this species all over the world.",
		'fr-fr': "On trouve des Granivol à peu près partout, car le vent les porte aux quatre coins du monde. Ils évitent toutefois les régions froides."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card