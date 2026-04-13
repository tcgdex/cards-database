import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Lightning Energy",
	},

	rarity: "None",
    category: "Energy",
    energyType: "Normal",

	variants: [
		{
			type: "normal"
		},
	],

	thirdParty: {
		cardmarket: 742009,
		tcgplayer: 532090
	}
}

export default card