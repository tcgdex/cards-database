import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		en: "Vulpix",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Will-O-Wisp",
		},

		damage: 20
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "Mina Nakai",

	thirdParty: {
		cardmarket: 741990,
		tcgplayer: 524087
	}
}

export default card