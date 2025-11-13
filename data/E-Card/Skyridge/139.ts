import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Star Piece",
		de: "Sternenstück"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		de: "Ist zu irgendeinem Zeitpunkt zwischen Zügen das Pokémon an das diese Karte angelegt ist, auf der Bank und hat 2 oder mehr Schadensmarken, durchsuche dein Deck nach einer Entwicklungskarte, in die sich dieses Pokémon entwickelt, und lege sie auf das Pokémon. (Dies zählt als Entwickeln dieses Pokémon.) Mische dein Deck danach. Lege dann das Sternenstück auf deinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 275397,
		tcgplayer: 89507
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
