import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Battle Frontier",
		fr: "Zone de combat",
		de: "Kampfzone"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nLes Pokémon Évolués ,  et  de chaque joueur ne peuvent pas utiliser de Poké-Powers ou de Poké-Bodies.",
		de: "Entwickelte -Pokémon, entwickelte -Pokémon und entwickelte -Pokémon beider Spieler können keine Poké-Power oder Poké-Body anwenden."
	},

	thirdParty: {
		cardmarket: 277377,
		tcgplayer: 83741
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

