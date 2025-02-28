import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Frogadier"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Water Shuriken"
		},

		effect: {
			en: "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Mist Slash"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
	}
}

export default card
