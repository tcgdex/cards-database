import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Copieuse",
		de: "Nachahmerin"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
		de: "Mische deine Handkarten in dein Deck. Zähle danach die Anzahl der Karten auf der Hand deines Gegners. Ziehe ebenso viele Karten."
	},

	trainerType: "Supporter",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84426,
				cardmarket: 279062
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84426,
				cardmarket: 279062
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				cardmarket: 371572,
				tcgplayer: 123191,
			}
		},
		{
			type: "normal",
			stamp: ['gustavo-wada'],
			thirdParty: {
				cardmarket: 868205,
			}
		},
		{
			type: "normal",
			stamp: ['ross-cawthorn'],
			thirdParty: {
				cardmarket: 868206,
			}
		},
	],

}

export default card
