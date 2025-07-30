import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [158],
	set: Set,

	name: {
		en: "Totodile",
		fr: "Kaiminus",
		es: "Totodile",
		it: "Totodile",
		pt: "Totodile",
		de: "Karnimani"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mizue",

	description: {
		en: "Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			de: "Regenplatscher",
			es: "Golpe de Lluvia",
			pt: "Chuva Borrifante",
			it: "Spruzzapioggia"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582189
	}
}

export default card