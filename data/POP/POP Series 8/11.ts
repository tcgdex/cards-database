import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Roseanne’s Research",
		de: "Roxanas Nachforschungen"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for up to 2 in any combination of Basic Pokémon and basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		de: "Durchsuche dein Deck nach bis zu 2 Karten in beliebiger Kombination aus Basis-Pokémon- und Basis-Energiekarten. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278412,
				tcgplayer: 88816
			}
		},
	],
}

export default card
