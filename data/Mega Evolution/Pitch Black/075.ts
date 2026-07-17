import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Dark Bell",
		fr: "Cloche Ténébreuse",
		es: "Campana Oscura",
		'es-mx': "Campanilla Oscuridad",
		de: "Düsterglocke"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		en: "Both Active Pokémon (except any Darkness type Pokémon) are now Confused."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895859,
				tcgplayer: 704832
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895859,
				tcgplayer: 704832
			}
		},
	],
}

export default card
