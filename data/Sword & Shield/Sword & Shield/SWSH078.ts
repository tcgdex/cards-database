import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Orbeetle V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [826],
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Strafe"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Mysterious Wave"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "50+"
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card