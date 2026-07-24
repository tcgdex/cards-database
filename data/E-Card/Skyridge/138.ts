import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Oracle",
		de: "Orakel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only 1 Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 2 cards from your deck and shuffle the rest of your deck. Put the chosen cards on top of your deck in any order.",
		de: "Wähle 2 Karten aus deinem Deck und mische den Rest deines Decks. Lege die gewählten Karten in beliebiger Reihenfolge oben auf dein Deck."
	},

	attacks: [
		{
			// name intentionally left blank
			name: {},
			effect: {
				en: "Choose 2 cards from your deck and shuffle the rest of your deck. Put the chosen cards on top of your deck in any order."
			}
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87887,
				cardmarket: 275396
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87887,
				cardmarket: 275396
			},
		},
		{
			type: 'normal',
			stamp: ['chris-fulop'],
			thirdParty: {
				tcgplayer: 477410
			}
		},
		{
			type: 'normal',
			stamp: ['reed-weichler'],
			thirdParty: {
				tcgplayer: 477411
			}
		},
		{
			type: 'normal',
			stamp: ['kevin-nguyen'],
			thirdParty: {
				tcgplayer: 477412
			}
		}
	],
}

export default card
