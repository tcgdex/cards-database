import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		en: "Crobat VMAX"
	},

	rarity: "None",
	dexId: [169],
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		en: "Crobat V"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Stealth Poison"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 70
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Max Cutter"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card