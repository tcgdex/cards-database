import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Eternatus V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [890],
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Power Accelerator"
		},

		effect: {
			en: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dynamax Cannon"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 120 more damage."
		},

		damage: "120+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card