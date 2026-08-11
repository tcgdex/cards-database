import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Apricorn Maker",
		de: "Aprikoko Hersteller"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only 1 Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 Trainer cards with Ball in their names, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		de: "Durchsuche dein Deck nach bis zu 2 Trainer-Karten, die Ball in ihrem Namen haben, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83564,
				cardmarket: 275379
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83564,
				cardmarket: 275379
			},
		},
	],
}

export default card
