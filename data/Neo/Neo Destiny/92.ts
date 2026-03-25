import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Broken Ground Gym",
		fr: "Stade des terres brisées",
		de: "Broken Ground Gym*"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -vous de cette carte si une autre carte Stade arrive en jeu.",
		de: "Each player pays  more to retreat a Baby Pokémon or Basic Pokémon.",
	},

	thirdParty: {
		cardmarket: 274744,
		tcgplayer: 83990
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
