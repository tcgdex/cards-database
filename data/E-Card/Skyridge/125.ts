import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Fisherman",
		de: "Angler"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		de: "Wähle 4 Basis Energiekarten aus deinem Ablagestapel (falls dort weniger Basis Energiekarten vorhanden sind, nimm sie alle), zeige sie deinem Gegner und nimm sie auf deine Hand."
	},

	thirdParty: {
		cardmarket: 275383,
		tcgplayer: 85471
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
