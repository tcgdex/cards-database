import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cyrus's Conspiracy",
		fr: "Le complot d'Hélio",
		de: "Zyrus' Komplott"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a Supporter card, a basic Energy card, and a Trainer card that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Search your deck for a Supporter card, a basic Energy card, and a Trainer card that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	},

	trainerType: "Supporter",

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84557,
				cardmarket: 278526
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278526,
				tcgplayer: 84557
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479878
			}
		},
		{
			type:"normal",
			stamp: ["stephen-silvestro"],
			thirdParty: {
				tcgplayer: 479892
			}
		},
		{
			type:"normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480025
			}
		}
	],

	retreat: 0
}

export default card
