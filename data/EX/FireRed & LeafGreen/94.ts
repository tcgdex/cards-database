import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Mt. Moon",
		fr: "Mont Selenite",
		de: "Mondberg"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre Carte Stade est mise en jeu.\n\nTous les Pokémon (les vôtres et ceux de votre adversaire) ayant un total de Points de vie maximum de moins 70 ne peuvent pas utiliser de Poké-Powers.",
		de: "Any Pokémon (both yours and your opponent's) with maximum HP less than 70 can't use any Poke-Power"
	}
}

export default card
