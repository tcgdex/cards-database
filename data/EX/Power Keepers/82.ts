import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Sidney's Stadium",
		fr: "Stade de Damien",
		de: "Ulrichs Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLes Pokémon  de chaque joueur ne peuvent pas être Endormis, Confus ou Paralysés.",
		de: "Alle -Pokémon beider Spieler können nicht mehr schlafen, verwirrt oder gelähmt sein."
	},

	thirdParty: {
		cardmarket: 277388
	}
}

export default card
