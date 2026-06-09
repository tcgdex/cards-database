import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Scott",
		fr: "Scott",
		de: "Scott"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 3 cards in any combination of Supporter cards and Stadium cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck n'importe quelle combinaison de cartes Supporter et Stade (jusqu'à 3), montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Search your deck for up to 3 cards in any combination of Supporter cards and Stadium cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
	},

	thirdParty: {
		tcgplayer: 88975,
		cardmarket: 276595
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["curran-hill"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
