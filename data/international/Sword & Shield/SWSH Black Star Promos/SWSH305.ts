import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Greninja",
	},

	illustrator: "Taiga Kasai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",
	dexId: [658],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Coordinated Shuriken",
		},

		effect: {
			'en-us': "This attack also does 10 damage to 3 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon",
		},

		damage: 120
	}],

	evolveFrom: {
		'en-us': "Frogadier",
	},

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal into two.",
	},

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2022"],
			thirdParty: {
				tcgplayer: 485845
			},
		},
	],

	regulationMark: "F"
}

export default card
