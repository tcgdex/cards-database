import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Corviknight",
		fr: "Corvaillus",
		es: "Corviknight",
		it: "Corviknight",
		pt: "Corviknight",
		de: "Krarmor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		en: "Corvisquire",
		fr: "Bleuseille",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	stage: "Stage2",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region's airborne taxi service."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Steel Wing"
		},

		damage: 50,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Power Cyclone"
		},

		damage: 160,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
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