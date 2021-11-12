import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuya Oka",

	description: {
		en: "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Gut Punch"
		},

		damage: "30+",

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 60 more damage."
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