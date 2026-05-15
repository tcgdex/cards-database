import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Underground Expedition",
		de: "Expedition ins Unterirdische"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only 1 Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the bottom 4 cards of your deck. Put 2 of those cards into your hand, and then return the remaining cards to the bottom of your deck in any order.",
		de: "Schaue dir die 4 untersten Karten deines Decks an. Nimm 2 dieser Karten auf deine Hand und lege die übrigen Karten in beliebiger Reihenfolge unter dein Deck zurück."
	},

	thirdParty: {
		cardmarket: 275398,
		tcgplayer: 90155
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		},
		{
			type: 'normal',
			stamp: ['chris-fulop']
		},
		{
			type: 'normal',
			stamp: ['tsuguyoshi-yamato']
		}
	]
}

export default card
