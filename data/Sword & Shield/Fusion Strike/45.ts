import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace VMAX",
		fr: "Pyrobut VMAX",
		es: "Cinderace VMAX",
		it: "Cinderace VMAX",
		pt: "Cinderace VMAX",
		de: "Liberlo VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		en: "Cinderace V",
		fr: "Pyrobut-V",
		es: "Cinderace V",
		it: "Cinderace-V",
		pt: "Cinderace V",
		de: "Liberlo-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "G-Max Fireball"
		},

		damage: 230,

		effect: {
			en: "Your opponent's Active Pokémon is now Burned. During your next turn, this Pokémon can't attack."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card