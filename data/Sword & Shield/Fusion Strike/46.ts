import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [850],
	set: Set,

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		pt: "Sizzlipede",
		de: "Thermopod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "miki kudo",

	description: {
		en: "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			es: "Roer",
			pt: "Roída",
			it: "Rosicchiamento"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Ember",
			fr: "Flammèche",
			de: "Glut",
			es: "Ascuas",
			pt: "Brasa",
			it: "Braciere"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card