import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Lake Boundary",
		fr: "Berge du lac",
		de: "Seeufer"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Multipliez la Faiblesse de chaque Pokémon par 2 (les vôtres et ceux de votre adversaire).",
		de: "Wenn Pokémon (deine und die deines Gegners) eine Schwäche haben, dann wird der entsprechende Schaden nicht um den Schwäche-Wert dieses Pokémon erhöht, sondern verdoppelt.",
	},

	thirdParty: {
		cardmarket: 277741,
		tcgplayer: 86586
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
