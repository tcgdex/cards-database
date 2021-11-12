import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Naoki Saito",

	description: {
		en: "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Icy Wind"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Splash Arch"
		},

		effect: {
			en: "Put all Energy attached to this Pokémon into your hand. This attack does 100 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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