import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Phoebe's Stadium",
		'fr-fr': "Stade de Spectra",
		'de-de': "Antonias Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player pays ColorlessColorless less to retreat his or her Psychic Pokémon.",
		'fr-fr': "Chaque joueur paye Incolore Incolore en moins pour faire battre son Pokémon Psy en retraite.",
		'de-de': "Jeder Spieler bezahlt   weniger, um seine -Pokémon zurückzuziehen.",
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
