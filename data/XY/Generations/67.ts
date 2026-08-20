import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		en: "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
		de: "Wirf 1 Münze. Durchsuche bei „Kopf“ dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288503
	}
}

export default card
