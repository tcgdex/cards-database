import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Champion's Room",
		fr: "Salle de Maître",
		de: "Kammer des Champs"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Die Rückzugskosten aller Pokémon SP (deiner und der deines Gegners) verringern sich um ."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278826
	}
}

export default card
