import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Goodra"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [706],
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		en: "Sliggoo"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Slimy Slip"
		},

		effect: {
			en: "When your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, that Pokémon does not retreat and your opponent does not discard any Energy for retreating. This Ability's effect can't stack."
		}
	}],

	attacks: [{
		name: {
			en: "Dragon Pulse"
		},

		cost: ["Water", "Psychic"],
		damage: 160,

		effect: {
			en: "Discard the top card of your deck."
		}
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693495
			}
		}
	],
}

export default card