import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
		es: "Panpour",
		it: "Panpour",
		pt: "Panpour",
		de: "Sodamak"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shin Nagasawa",

	description: {
		en: "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Pulse"
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Circus Soaking"
		},

		damage: "60×",

		effect: {
			en: "Your opponent reveals their hand. This attack does 60 damage for each Supporter card you find there."
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