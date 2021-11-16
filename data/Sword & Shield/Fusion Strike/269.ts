import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mew VMAX",
		fr: "Mew VMAX",
		es: "Mew VMAX",
		it: "Mew VMAX",
		pt: "Mew VMAX",
		de: "Mew VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		en: "Mew V",
		fr: "Mew-V",
		es: "Mew V",
		it: "Mew-V",
		pt: "Mew V",
		de: "Mew-V"
	},

	stage: "VMAX",
	retreat: 0,
	regulationMark: "E",
	illustrator: "AKIRA EGAWA",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cross Fusion Strike"
		},

		effect: {
			en: "Choose 1 of your Benched Fusion Strike Pokémon's attacks and use it as this attack."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Max Miracle"
		},

		damage: 130,

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
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