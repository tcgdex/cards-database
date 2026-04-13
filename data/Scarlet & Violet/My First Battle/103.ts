import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		en: "Exeggutor",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Seed Bomb",
		},

		damage: 40
		}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Barrage Impact",
		},

		damage: 80
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "nagimiso",

	thirdParty: {
		cardmarket: 741981,
		tcgplayer: 524015
	}
}

export default card