import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Grass Energy",
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
		cardmarket: 741986,
		tcgplayer: 524038
	}
}

export default card