import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Goodra"
	},

	illustrator: "okayamatakatoshi",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Stage2",
	dexId: [706],

	evolveFrom: {
		en: "Sliggoo"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Slimy Sliding"
		},

		effect: {
			en: "When your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, Energy for its Retreat Cost is not discarded, and they don't switch Pokémon. The effect of Slimy Sliding doesn't stack."
		}
	}],

	attacks: [{
		cost: ["Water", "Psychic"],

		name: {
			en: "Dragon Pulse"
		},

		effect: {
			en: "Discard the top card of your deck."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 694688
			}
		}
	]
}

export default card
