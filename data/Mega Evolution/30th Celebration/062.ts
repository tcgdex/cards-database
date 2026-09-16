import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1008],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning."
	},

	attacks: [{
		name: {
			en: "Mach Bolt"
		},

		cost: ["Lightning"],

		damage: 20,
	}, {
		name: {
			en: "Electro Drift"
		},

		cost: ["Lightning", "Lightning", "Colorless"],

		damage: 140,

		effect: {
			en: "Discard 2 Lightning Energy from this Pokémon."
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
			type: "normal",
			thirdParty: {
				cardmarket: 907669,
				tcgplayer: 716461
			}
		}
	],
}

export default card
