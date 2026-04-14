import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		en: "Bulbasaur",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle",
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Vine Whip",
		},

		damage: 30
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur-silhouette"],

			thirdParty: {
				cardmarket: 741976,
				tcgplayer: 523985
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["bulbasaur-silhouette"],

			thirdParty: {
				cardmarket: 741975,
				tcgplayer: 523984
			}
		},
	],

	illustrator: "Saya Tsuruta",
}

export default card