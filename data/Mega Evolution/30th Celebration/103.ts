import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga"
	},

	illustrator: "toriyufu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [483],
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	description: {
		en: "A Pokémon spoken of in legend. It is said that time began moving when Dialga was born."
	},

	attacks: [{
		name: {
			en: "Reversed Clock"
		},

		cost: ["Colorless"],

		effect: {
			en: "Shuffle up to 3 in any combination of Pokémon and Basic Energy cards from your discard pile into your deck."
		}
	}, {
		name: {
			en: "Heavy Impact"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 110,
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907710,
				tcgplayer: 716496
			}
		}
	],
}

export default card
