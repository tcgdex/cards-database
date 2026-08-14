import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Goop Gas Attack",
		fr: "Attaque au gaz gluant",
		de: "Uhu-Gasangriff"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "All Pokémon Powers stop working until the end of your opponent's next turn.",
		fr: "Tous les Pouvoirs Pokémon cessent de fonctionner jusqu'à la fin du prochain tour de votre adversaire.",
		de: "Alle Pokémon-Powers funktionieren nicht mehr bis zum Ende des nächsten gegnerischen Zuges."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274131,
				tcgplayer: 85841
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274131,
				tcgplayer: 85841
			}
		}
	]
}

export default card
