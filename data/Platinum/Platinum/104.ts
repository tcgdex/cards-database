import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Broken Time-Space",
		fr: "Espace-Temps brisé",
		de: "Raum-Zeit-Anomalie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur peut faire évoluer un Pokémon qu'il ou elle a joué ou fait évolué ce tour-ci.",
		de: "Each player may evolve a Pokémon that he or she just played or evolved during that turn."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278525,
		tcgplayer: 83991
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league"
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card
