import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		en: "Applin",
		fr: "Verpom",
		es: "Applin",
		it: "Applin",
		pt: "Applin",
		de: "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			es: "Fluido Rociado",
			it: "Fluidospray",
			pt: "Fluido Spray",
			de: "Sprühwasser"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785865,
				tcgplayer: 567238
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785865,
				tcgplayer: 567238
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

}

export default card
