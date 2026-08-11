import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Scientist",
		fr: "Scientifique Holon",
		de: "Holon-Wissenschaftler"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard a card from your hand. If you can't discard a card from your hand, you can't play this card. If you have less cards in your hand than your opponent, draw cards until you have the same number of cards as your opponent.",
		fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nSi vous avez moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous et votre adversaire ayez le même nombre de cartes en main.",
		de: "Lege 1 Karte von deiner Hand auf den Ablagestapel. Wenn du das nicht machen kannst, kannst du diese Karte nicht spielen.\n\nWenn du weniger Karten auf der Hand hast als dein Gegner, ziehe so viele Karten von deinem Deck, bis ihr beide die gleiche Anzahl Karten auf der Hand habt.",
	},

	thirdParty: {
		cardmarket: 276860,
		tcgplayer: 86152
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
			stamp: ["miska-saari"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},
	]
}

export default card
