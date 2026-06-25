import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Holon Adventurer",
		fr: "Aventurier Holon",
		de: "Holon-Abenteurer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard a card from your hand. If you can't discard a card from your hand, you can't play this card. Draw 3 cards. If you discarded a Pokémon that has δ on its card, draw 4 cards instead.",
		fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nPiochez 3 cartes. Si vous avez défaussé un Pokémon possédant le symbole δ, piochez 4 cartes.",
		de: "Lege 1 Karte von deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, kannst du diese Karte nicht spielen.\n\nZiehe 3 Karten. Wenn du ein Pokémon, auf dem δ zu sehen ist, auf den Ablagestapel gelegt hast, ziehe stattdessen 4 Karten.",
	},

	thirdParty: {
		cardmarket: 277055,
		tcgplayer: 86134
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
