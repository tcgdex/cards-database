import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar VMAX",
		fr: "Ectoplasma VMAX",
		es: "Gengar VMAX",
		it: "Gengar VMAX",
		pt: "Gengar VMAX",
		de: "Gengar VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		en: "Gengar V",
		fr: "Ectoplasma-V",
		es: "Gengar V",
		it: "Gengar-V",
		pt: "Gengar V",
		de: "Gengar-V"
	},

	stage: "VMAX",
	retreat: 3,
	regulationMark: "E",
	illustrator: "sowsow",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Fear and Panic"
		},

		damage: "60×",

		effect: {
			en: "This attack does 60 damage for each of your opponent's Pokémon V and Pokémon-GX in play."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "G-Max Swallow Up"
		},

		damage: 250,

		effect: {
			en: "During your next turn, this Pokémon can't attack."
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