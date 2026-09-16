import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zorua"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [570],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	description: {
		en: "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon."
	},

	attacks: [{
		name: {
			en: "Darkness Fang"
		},

		cost: ["Darkness", "Darkness"],

		damage: 40,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907702,
				tcgplayer: 716488
			}
		}
	],
}

export default card
