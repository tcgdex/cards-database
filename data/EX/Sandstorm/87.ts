import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lanette's Net Search",
		fr: "Annette surfe sur le net",
		de: "Lanettes Internetsuche"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 3 different types of Basic Pokémon cards (excluding Baby Pokémon), show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck jusqu'à trois types de cartes Pokémon de base différents (sauf les cartes Bébé Pokémon), montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach bis zu 3 verschiedenen Basis-Pokémon (außer Baby-Pokémon), zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach.",
	},

	thirdParty: {
		cardmarket: 275864,
		tcgplayer: 86597
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
