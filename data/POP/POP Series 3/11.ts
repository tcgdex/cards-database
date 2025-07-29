import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Low Pressure System",
		fr: "Système à basse pression"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Each Grass and Lightning Pokémon in play (both yours and your opponent’s) gets +10 HP.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nChaque Pokémon  et  en jeu (les vôtres et ceux de votre adversaire) obtient 10 PV de plus."
	},

	trainerType: "Stadium",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277459
	}
}

export default card
