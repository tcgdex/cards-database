import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [861],
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Spiky Knuckle"
		},

		effect: {
			en: "Put 2 Darkness Energy attached to this Pokémon into your hand."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card