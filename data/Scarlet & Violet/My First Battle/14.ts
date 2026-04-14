import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		en: "Arcanine",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		en: "Growlithe",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Flare Blitz",
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage",
		},

		damage: "90+"
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander-silhouette"]
		},
	],

	illustrator: "nisimana",

	thirdParty: {
		cardmarket: 741993,
		tcgplayer: 524094
	}
}

export default card