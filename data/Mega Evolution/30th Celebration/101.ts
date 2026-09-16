import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Meowth"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	description: {
		en: "Living with a savage, seafaring people has toughened this Pokémon's body so much that parts of it have turned to iron."
	},

	attacks: [{
		name: {
			en: "Pay Day"
		},

		cost: ["Colorless"],

		damage: 10,

		effect: {
			en: "Draw a card."
		}
	}, {
		name: {
			en: "Treasure Rush"
		},

		cost: ["Metal"],

		damage: "10×",

		effect: {
			en: "This attack does 10 damage for each card in your hand."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907708,
				tcgplayer: 716494
			}
		}
	],
}

export default card
