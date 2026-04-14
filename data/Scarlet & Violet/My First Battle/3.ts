import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [2],
	set: Set,

	name: {
		en: "Oddish",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Absorb",
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
		},

		damage: 10
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741978,
				tcgplayer: 524008
			}
		},
	],

	illustrator: "Gemi",
}

export default card