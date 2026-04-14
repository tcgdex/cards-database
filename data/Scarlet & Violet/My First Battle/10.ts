import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		en: "Charmeleon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		en: "Charmander",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
		},

		damage: 30
		}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Flamethrower",
		},

		damage: 60
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander-silhouette"]
		},
	],

	illustrator: "kirisAki",

	thirdParty: {
		cardmarket: 741989,
		tcgplayer: 524085
	}
}

export default card