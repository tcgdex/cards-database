import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Breloom V",
		fr: "Chapignon V",
		es: "Breloom V",
		it: "Breloom V",
		pt: "Breloom V",
		de: "Kapilz V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Counter"
		},

		damage: "20+",

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Mach Cross"
		},

		damage: 140
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
