import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Max Revive",
		fr: "Rappel Max",
		de: "Top-Beleber"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mettez un Pokémon de votre pile de défausse sur le dessus de votre deck.",
		en: "Put a Pokémon from your discard pile on top of your deck.",
		de: "Lege 1 Pokémon von deinem Ablagestapel auf dein Deck. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288501,
		tcgplayer: 113723
	}
}

export default card
