import { Card } from '../../../interfaces'
import Set from '../Emerald'

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
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nLes Pokémon Évolués ,  et  de chaque joueur ne peuvent pas utiliser de Poké-Powers ou de Poké-Bodies.",
		de: "Each player's  Evolved Pokémon,  Evolved Pokémon, and  Evolved Pokémon can't use any Poké-Powers or Poké-Bodies."
	},

	thirdParty: {
		tcgplayer: 83740,
		cardmarket: 276586
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
