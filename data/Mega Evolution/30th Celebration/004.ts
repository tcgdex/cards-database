import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Illumise"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [314],
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	description: {
		en: "It guides Volbeat to draw signs in the night sky. There are scholars who research the meaning of these signs."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Supereffective Pheromones"
		},

		effect: {
			en: "If you have Volbeat in play, apply Weakness for both Active Pokémon as ×3."
		}
	}],

	attacks: [{
		name: {
			en: "Ram"
		},

		cost: ["Grass", "Colorless"],

		damage: 30,
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
				cardmarket: 907610,
				tcgplayer: 716438
			}
		}
	],
}

export default card
