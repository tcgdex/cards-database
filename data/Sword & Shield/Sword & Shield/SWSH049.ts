import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Dubwool V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [832],
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Soft Wool"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Revenge Blast"
		},

		effect: {
			en: "This attack does 30 more damage for each Prize card your opponent has taken."
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