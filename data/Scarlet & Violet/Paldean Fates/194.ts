import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		it: "Noibat",
		pt: "Noibat",
		de: "eF-eM"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Darkness"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Nelnal",

	thirdParty: {
		cardmarket: 751606
	}
}

export default card