import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Minior"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [774],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "It feeds on dust in the atmosphere. The color of its core is said to be determined by the composition of the dust it eats."
	},

	attacks: [{
		name: {
			en: "Shoot Meteors"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Discard all Energy from this Pokémon, and this attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907731,
				tcgplayer: 716513
			}
		}
	],
}

export default card
