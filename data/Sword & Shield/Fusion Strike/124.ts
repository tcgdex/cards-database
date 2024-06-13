import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [648],
	set: Set,

	name: {
		en: "Meloetta",
		fr: "Meloetta",
		es: "Meloetta",
		it: "Meloetta",
		pt: "Meloetta",
		de: "Meloetta"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		en: "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it."
	},

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Melodious Echo"
		},

		damage: "70×",

		effect: {
			en: "This attack does 70 damage for each Fusion Strike Energy attached to all of your Pokémon."
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