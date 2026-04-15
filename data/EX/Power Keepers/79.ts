import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Phoebe's Stadium",
		fr: "Stade de Spectra",
		de: "Antonias Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Chaque joueur paye Incolore Incolore en moins pour faire battre son Pokémon Psy en retraite.",
		de: "Jeder Spieler bezahlt   weniger, um seine -Pokémon zurückzuziehen.",
	},

	thirdParty: {
		cardmarket: 277385,
		tcgplayer: 88010
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card
