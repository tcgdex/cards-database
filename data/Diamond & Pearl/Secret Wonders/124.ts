import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Rival",
		fr: "Rival",
		de: "Rivale"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Decke die obersten 5 Karten deines Decks auf. Dein Gegner wählt 3 von diesen Karten. Nimm die gewählten Karten auf die Hand und lege die restlichen 2 Karten zurück auf dein Deck. Mische dein Deck danach."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277877,
		tcgplayer: 88765
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
