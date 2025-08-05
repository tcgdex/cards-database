import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "High Pressure System",
		fr: "Système à haute pression",
		de: "Hochdrucksystem"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nChaque joueur ne paye pas de  pour faire battre en retraite ses Pokémon  et .",
		de: "Each players pays  less to retreat his or her  and  Pokémon."
	},

	thirdParty: {
		tcgplayer: 86076,
		cardmarket: 275962
	}
}

export default card
