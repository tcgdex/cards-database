import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Toxel"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [848],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "This selfish, attention-seeking Pokémon stores poison and electricity in two different sacs inside its body."
	},

	attacks: [{
		name: {
			en: "Ram"
		},

		cost: ["Colorless"],

		damage: 10,
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
				cardmarket: 907665,
				tcgplayer: 716457
			}
		}
	],
}

export default card
