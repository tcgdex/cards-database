import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Tropical Tidal Wave",
		fr: "Raz-de-marée tropical"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Promo",
	category: "Trainer",

	set: Set,
	dexId: [
		25,183,54,187
	],

	effect: {
		en: "Flip a coin. If heads, discard all Trainer and Stadium cards your opponent has in play. If tails, discard all Trainer and Stadium cards you have in play.",
		fr: "Lancez une pièce. Si c'est face, défaussez toutes les cartes Dresseur et Stade que votre adversaire a en jeu. Si c'est pile, défaussez toutes les cartes Dresseur et Stade que vous avez en jeu."
	},

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2010"],
			thirdParty: {
				cardmarket: 275594,
				tcgplayer: 90052
			}
		},
		{
			type: "normal",
			stamp: ["worlds-2010","staff"],
			thirdParty: {
				tcgplayer: 97703
			}
		},
		{
			type: "normal",
			stamp: ["worlds-2010","finalist"],
		},
		{
			type: "normal",
			stamp: ["worlds-2010","quarter-finalist"],
			thirdParty: {
				tcgplayer: 97701
			}
		},
		{
			type: "normal",
			stamp: ["worlds-2010", "semi-finalist"],
			thirdParty: {
				tcgplayer: 97702
			}
		},
		{
			type: "normal",
			stamp: ["worlds-2010", "top-sixteen"],
			thirdParty: {
				tcgplayer: 97700
			}
		},
		{
			type: "normal",
			stamp: ["worlds-2010", "top-thirty-two"],
			thirdParty: {
				tcgplayer: 97699
			}
		},
	],

}

export default card
