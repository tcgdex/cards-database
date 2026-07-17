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
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		en: "Both Active Pokémon (except any Darkness type Pokémon) are now Confused."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895891,
				tcgplayer: 704863
			}
		},
	],
}

export default card
