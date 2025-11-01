import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Hoppip",
		fr: "Granivol"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Outside of cold regions, Hoppip can be found\npractically everywhere. This is because the wind\ncarries this species all over the world.",
		fr: "On trouve des Granivol à peu près partout, car le vent les porte aux quatre coins du monde. Ils évitent toutefois les régions froides."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
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