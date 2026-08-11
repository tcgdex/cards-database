import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Star Piece",
		'de-de': "Sternenstück"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	set: Set,

	effect: {
		'en-us': "Attach Star Piece to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to is Benched and has 2 or more damage counters on it, search your deck for an Evolution card that Pokémon evolves into and put it on top of that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. Then, discard Star Piece.",
		'de-de': "Ist zu irgendeinem Zeitpunkt zwischen Zügen das Pokémon an das diese Karte angelegt ist, auf der Bank und hat 2 oder mehr Schadensmarken, durchsuche dein Deck nach einer Entwicklungskarte, in die sich dieses Pokémon entwickelt, und lege sie auf das Pokémon. (Dies zählt als Entwickeln dieses Pokémon.) Mische dein Deck danach. Lege dann das Sternenstück auf deinen Ablagestapel."
	},

	attacks: [
		{
			// name intentionally left blank
			name: {},
			effect: {
				'en-us': "At any time between turns, if the Pokémon this card is attached to is Benched and has 2 or more damage counters on it, search your deck for an Evolution card that Pokémon evolves into and put it on top of that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. Then, discard Star Piece."
			}
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89507,
				cardmarket: 275397
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89507,
				cardmarket: 275397
			},
		},
	],
}

export default card
