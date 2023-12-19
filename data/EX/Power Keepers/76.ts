import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Glacia's Stadium",
		fr: "Stade de Glacia",
		de: "Frosinas Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLes Pokémon  de chaque joueur (Pokémon-ex exclus) ne possèdent pas de Faiblesse.",
		de: "Alle -Pokémon beider Spieler (außer Pokémon-ex) haben keine Schwäche mehr."
	}
}

export default card
