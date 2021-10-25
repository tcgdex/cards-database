import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Crobat VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	dexId: [169],
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		en: "Crobat V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Stealth Poison"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon."
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

	retreat: 1
}

export default card