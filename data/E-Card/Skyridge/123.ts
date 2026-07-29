import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Desert Shaman",
		de: "Wüsten -Schamane"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only 1 Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck and draw up to 4 cards. Your opponent does the same.",
		de: "Mische die Karte auf deiner Hand in dein Deck und ziehe bis zu 4 Karten. Dein Gegner geht genau so vor."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84782,
				cardmarket: 275381
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84782,
				cardmarket: 275381
			},
		},
		{
			type: 'normal',
			stamp: ['kevin-nguyen'],
			thirdParty: {
				tcgplayer: 477379
			}
		}
	],
}

export default card
