import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [25],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Zip-Zap Frenzy"
		},

		cost: ["Lightning"],

		effect: {
			en: "You may attach any number of Basic Energy cards from your hand to your Pokémon in any way you like."
		}
	}, {
		name: {
			en: "Thunder"
		},

		cost: ["Lightning", "Lightning", "Colorless"],

		damage: 200,

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907661,
				tcgplayer: 712952
			}
		}
	],
}

export default card
