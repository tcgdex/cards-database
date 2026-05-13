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
	set: Set,

	effect: {
		en: "You can play only 1 Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 2 cards from your deck and shuffle the rest of your deck. Put the chosen cards on top of your deck in any order.",
		de: "Wähle 2 Karten aus deinem Deck und mische den Rest deines Decks. Lege die gewählten Karten in beliebiger Reihenfolge oben auf dein Deck."
	},

	thirdParty: {
		cardmarket: 275396,
		tcgplayer: 87887
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
			stamp: ['reed-weichler']
		},
		{
			type: 'normal',
			stamp: ['kevin-nguyen']
		}
	]
}

export default card
