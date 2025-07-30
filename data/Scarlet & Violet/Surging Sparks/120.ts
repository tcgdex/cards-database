import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Shroodle",
		fr: "Gribouraigne",
		es: "Shroodle",
		it: "Shroodle",
		pt: "Shroodle",
		de: "Sproxi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

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

	variants: {
		holo: false
	},

	illustrator: "Yukiko Baba",

	thirdParty: {
		cardmarket: 794463
	}
}

export default card
