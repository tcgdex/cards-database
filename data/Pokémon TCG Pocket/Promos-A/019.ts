import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	types: ["Water"],
	stage: "Stage2",

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
		name: {
			en: "Mist Slash"
		},

		cost: ["Water", "Colorless"],
		damage: 60
	}],

	hp: 120,

	evolveFrom: {
		en: "Frogadier"
	},

	description: {
		en: "It creates throwing stars out of compressed water.  When it spins them and throws them at high speed,  these stars can split metal in two."
	},

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
