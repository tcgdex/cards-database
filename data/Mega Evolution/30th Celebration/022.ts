import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Wishiwashi"
	},

	illustrator: "Narano",
	rarity: "Common",
	category: "Pokemon",
	dexId: [746],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	description: {
		en: "Individually, they're incredibly weak. It's by gathering up into schools that they're able to confront opponents."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Counterattack Grouping"
		},

		effect: {
			en: "If your Wishiwashi or Wishiwashi ex is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if your Pokémon is Knocked Out), place 3 damage counters on the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Surprise Attack"
		},

		cost: ["Water"],

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907629,
				tcgplayer: 716454
			}
		}
	],
}

export default card
