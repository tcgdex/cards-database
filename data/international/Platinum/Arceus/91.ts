import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Ultimate Zone",
		'fr-fr': "Zone ultime",
		'de-de': "Ultimativ-Zone"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. During each player's turn, the player may move an Energy card attached to 1 of his or her Benched Pokémon to his or her Active Arceus as often as he or she likes.",
		'de-de': "Beliebig oft während seines Zuges kann jeder Spieler 1 Energiekarte von 1 Pokémon auf seiner Bank entfernen und an sein Aktives Arceus anlegen."
	},

	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90133,
				cardmarket: 278963
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278963,
				tcgplayer: 90133
			}
		},
	],

	retreat: 0
}

export default card
