import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [484],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	description: {
		en: "It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology."
	},

	attacks: [{
		name: {
			en: "Wormhole"
		},

		cost: ["Water", "Water", "Colorless"],

		damage: 100,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907627,
				tcgplayer: 716453
			}
		}
	],
}

export default card
