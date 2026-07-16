import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [658],
	set: Set,
	illustrator: "Taiga Kasai",

	name: {
		en: "Greninja",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Coordinated Shuriken",
		},

		effect: {
			en: "This attack also does 10 damage to 3 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon",
		},

		damage: 120
	}],

	evolveFrom: {
		en: "Frogadier",
	},

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal into two.",
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
