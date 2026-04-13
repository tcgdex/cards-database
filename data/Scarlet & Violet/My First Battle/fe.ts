import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Fire Energy",
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
		cardmarket: 741998,
		tcgplayer: 524039
	}
}

export default card