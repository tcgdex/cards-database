import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace V",
		fr: "Pyrobut V",
		es: "Cinderace V",
		it: "Cinderace V",
		pt: "Cinderace V",
		de: "Liberlo V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blaze Kick"
		},

		damage: 210,

		effect: {
			en: "Discard 2 Fire Energy from this Pokémon."
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