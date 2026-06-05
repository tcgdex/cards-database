import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		fr: "Sonistrelle",
		en: "Noibat",
		es: "Noibat",
		it: "Noibat",
		pt: "Noibat",
		de: "eF-eM"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Darkness"],

		name: {
			fr: "Tornade",
			en: "Gust",
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
		holo: false
	},

	illustrator: "chibi",

	description: {
		en: "This Pokémon emits ultrasonic waves from its large ears to search for fruit to eat. It mistakes Applin for its food.",
	},

	thirdParty: {
		cardmarket: 715627
	}
}

export default card