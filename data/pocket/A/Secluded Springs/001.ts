import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol"
	},

	illustrator: "Kyoko Umemoto",
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
			'en-us': "Splash",
			'fr-fr': "Trempette"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card