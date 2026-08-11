import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Full Heal",
		'fr-fr': "Énergie guérisseuse",
		'de-de': "Hyperheiler"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Retirez tous les États spéciaux de votre Pokémon actif.",
		'en-us': "Remove all Special Conditions from your Active Pokémon.",
		'de-de': "Alle Speziellen Zustände auf deinen Aktiven Pokémon verlieren ihre Wirkung."
	},

	trainerType: "Item",

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85583,
				cardmarket: 279065
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85583,
				cardmarket: 279065
			}
		},
	],

}

export default card
