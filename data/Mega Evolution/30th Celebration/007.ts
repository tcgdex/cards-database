import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim"
	},

	illustrator: "takashi shiraishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [421],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	description: {
		en: "After absorbing plenty of sunlight, Cherrim takes this form. It's full of energy while it's like this, and its liveliness will go on until sundown."
	},

	attacks: [{
		name: {
			en: "Energy Gift"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Leafage"
		},

		cost: ["Grass", "Colorless"],

		damage: 50,
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
				cardmarket: 907613,
				tcgplayer: 716441
			}
		}
	],
}

export default card
