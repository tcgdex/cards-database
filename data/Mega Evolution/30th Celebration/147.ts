import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Fuecoco"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [909],
	hp: 210,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Singe"
		},

		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		name: {
			en: "Cheerful Flame"
		},

		cost: ["Fire", "Fire", "Colorless"],

		damage: "70×",

		effect: {
			en: "This attack does 70 damage for each Prize card you have taken."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907754,
				tcgplayer: 716229
			}
		}
	],
}

export default card
