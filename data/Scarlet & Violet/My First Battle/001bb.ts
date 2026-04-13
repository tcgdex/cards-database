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
			type: "normal"
		},
	],

	illustrator: "Saya Tsuruta",

	thirdParty: {
		cardmarket: 741975,
		tcgplayer: 523984
	}
}

export default card