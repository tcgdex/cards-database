import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Low Pressure System",
		fr: "Système à basse pression",
		de: "Tiefdrucksystem"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nChaque Pokémon  et  en jeu (les vôtres et ceux de votre adversaire) obtient 10 PV de plus.",
		de: "Each  and  Pokémon in play (both yours and your opponent's) gets +10HP."
	},

	thirdParty: {
		tcgplayer: 86846,
		cardmarket: 275963
	}
}

export default card
