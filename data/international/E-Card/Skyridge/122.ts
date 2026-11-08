import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Crystal Shard",
		'de-de': "Kristallscherbe"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	set: Set,

	effect: {
		'en-us': "Attach Crystal Shard to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as this card is attached to a Pokémon, that Pokémon's type (color) is Colorless. If that Pokémon attacks, discard this card at the end of the turn.",
		'de-de': "So lange diese Karte an ein Pokémon angelegt ist, ist der Typ (Farbe) dieses Pokémon . Greift das Pokémon an, lege diese Karte am Ende des Zuges auf deinen Ablagestapel."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84519,
				cardmarket: 275380
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84519,
				cardmarket: 275380
			},
		},
	],
}

export default card
