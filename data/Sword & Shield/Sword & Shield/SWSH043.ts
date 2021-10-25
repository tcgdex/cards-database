import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Sirfetch'd V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	dexId: [865],
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Resolute Spear"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of Fighting Energy from your other Pokémon to it."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Meteor Smash"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card