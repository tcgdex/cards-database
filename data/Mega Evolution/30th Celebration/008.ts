import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Vivillon"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [666],
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	description: {
		en: "This Pokémon was born in a special land. It scatters colorful, toxic scales from its wings during battle."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Guiding Dance"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}],

	attacks: [{
		name: {
			en: "Poison Powder"
		},

		cost: ["Grass", "Colorless"],

		damage: 60,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907614,
				tcgplayer: 716442
			}
		}
	],
}

export default card
