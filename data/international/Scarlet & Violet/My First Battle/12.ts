import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		en: "Ninetales",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Flame Tail",
		},

		damage: 70
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741991,
				tcgplayer: 524091
			}
		},
	],

	illustrator: "Kagemaru Himeno",
}

export default card