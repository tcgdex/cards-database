import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Charizard V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [6],
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Claw Slash"
		},

		damage: 80
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon."
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card