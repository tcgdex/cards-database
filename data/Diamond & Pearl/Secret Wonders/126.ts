import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Team Galactic's Mars",
		fr: "Mars de la Team Galaxie",
		de: "Team Galaktiks Mars"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 2 cartes. Ensuite, choisissez sans regarder une carte de la main de votre adversaire et placez-la au dessous de son deck.",
		de: "Ziehe 2 Karten. Danach wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie unter das Deck deines Gegners."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277879,
		tcgplayer: 89810
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
