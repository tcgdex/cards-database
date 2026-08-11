import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'de-de': "Tausch"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez un de vos Pokémon actifs avec un Pokémon de votre Banc.",
		'en-us': "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon.",
		'de-de': "Tausche 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89718,
				cardmarket: 279074
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89718,
				cardmarket: 279074
			}
		},
	],

}

export default card
