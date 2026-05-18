import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Holon Mentor",
		fr: "Mentor Holon",
		de: "Holon Lehrer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard a card from your hand. If you can't discard a card from your hand, you can't play this card. Search your deck for up to 3 Basic Pokémon that each has 100 HP or less, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, vous ne pouvez pas jouer cette carte.\n\nChoisissez dans votre deck jusqu'à 3 cartes Pokémon de base possédant chacun un maximum de 100 PV, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Lege 1 Karte von deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, kannst du diese Karte nicht spielen.\n\nDurchsuche dein Deck nach bis zu 3 Basis-Pokémon, die jeweils 100 KP oder weniger haben, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach.",
	},

	thirdParty: {
		cardmarket: 277280,
		tcgplayer: 86148
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
		}
	]
}

export default card
