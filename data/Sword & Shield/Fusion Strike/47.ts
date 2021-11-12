import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
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
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		en: "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card