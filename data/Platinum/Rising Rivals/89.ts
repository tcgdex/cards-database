import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Bebe's Search",
		fr: "La recherche d'Amelle",
		de: "Lanas Suche"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose a card from your hand and put it on top of your deck. Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. (If this is the only card in your hand, you can't play this card.)",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Wähle 1 Karte von deiner Hand und lege sie auf dein Deck. Durchsuche dein Deck nach einer Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. (Wenn diese Karte die einzige Karte auf deiner Hand ist, kannst du sie nicht spielen.)"
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278663,
				tcgplayer: 83763
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278663,
				tcgplayer: 83763
			}
		},
	],

}

export default card
