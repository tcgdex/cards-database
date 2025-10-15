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
