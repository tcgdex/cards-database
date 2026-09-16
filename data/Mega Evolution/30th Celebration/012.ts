import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ho-Oh"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [250],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	description: {
		en: "A legend says that its body glows in seven colors. A rainbow is said to form behind it when it flies."
	},

	attacks: [{
		name: {
			en: "Sacred Breath"
		},

		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard all Energy from this Pokémon. Heal all damage from 1 of your Benched Pokémon."
		}
	}, {
		name: {
			en: "Fire Wing"
		},

		cost: ["Fire", "Fire", "Fire"],

		damage: 100,
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907618,
				tcgplayer: 716446
			}
		}
	],
}

export default card
