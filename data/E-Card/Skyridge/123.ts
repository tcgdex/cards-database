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
	set: Set,

	effect: {
		de: "Mische die Karte auf deiner Hand in dein Deck und ziehe bis zu 4 Karten. Dein Gegner geht genau so vor."
	},

	thirdParty: {
		cardmarket: 275381,
		tcgplayer: 84782
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
			stamp: ['kevin-nguyen']
		}
	]
}

export default card
