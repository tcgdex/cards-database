import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Comfey"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [764],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "It prefers areas with lots of flowers. A Comfey adorned with flowers is a happy Comfey, and the flowers gain healing effects."
	},

	attacks: [{
		name: {
			en: "Comforting Aroma"
		},

		cost: ["Colorless"],

		effect: {
			en: "Heal 80 damage from 1 of your Benched Pokémon."
		}
	}, {
		name: {
			en: "Magical Shot"
		},

		cost: ["Psychic"],

		damage: 30,
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907684,
				tcgplayer: 716473
			}
		}
	],
}

export default card
