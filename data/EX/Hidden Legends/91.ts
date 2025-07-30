import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Magnetic Storm",
		fr: "Tempête Magnétique",
		de: "Magnet Sturm"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nLes dégâts infligés par des attaques de Pokémon  et  (les vôtres et ceux de votre adversaire) ne sont pas affectés par la Résistance.",
		de: "Any damage done by attacks from  Pokémon and  Pokémon (both yours and your opponent's) is not affected by Resistance."
	},

	thirdParty: {
		cardmarket: 276165
	}
}

export default card
