import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Water Energy",
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
		cardmarket: 742022,
		tcgplayer: 524041
	}
}

export default card