import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [517],
	set: Set,

	name: {
		en: "Munna",
		fr: "Munna",
		es: "Munna",
		it: "Munna",
		pt: "Munna",
		de: "Somniam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "miki kudo",

	description: {
		en: "It eats dreams and releases mist. The mist is pink when it's eating a good dream, and black when it's eating a nightmare."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			pt: "Aríete",
			it: "Carica"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card