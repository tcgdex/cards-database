import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zweilous"
	},

	illustrator: "IKEDA Saki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [634],
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	description: {
		en: "The two heads have different likes and dislikes. Because the heads fight with each other, Zweilous gets stronger without needing to rely on others."
	},

	attacks: [{
		name: {
			en: "Bite"
		},

		cost: ["Darkness"],

		damage: 20,
	}, {
		name: {
			en: "Hammer In"
		},

		cost: ["Darkness", "Colorless"],

		damage: 50,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907705,
				tcgplayer: 716491
			}
		}
	],
}

export default card
