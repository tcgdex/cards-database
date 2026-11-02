import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball",
		de: "Flottball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Reveal cards from your deck until you reveal a Pokémon. Show that Pokémon to your opponent and put it into your hand. Shuffle the other revealed cards back into your deck. (If you don't reveal a Pokémon, shuffle all the revealed cards back into your deck.)",
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main. Cherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		de: "Decke solange Karten von deinem Deck auf, bis du eine Pokémon-Karte aufdeckst. Zeige die Pokémon-Karte deinem Gegner und nimm sie auf die Hand. Mische die übrigen aufgedeckten Karten zurück in dein Deck. (Falls du keine Pokémon-Karte aufgedeckt hast, mische alle aufgedeckten Karten zurück in dein Deck.)",
	},

	thirdParty: {
		cardmarket: 277743,
		tcgplayer: 88477
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
