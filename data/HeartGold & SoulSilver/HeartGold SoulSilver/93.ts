import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Full Heal",
		fr: "Énergie guérisseuse",
		de: "Hyperheiler"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez tous les États spéciaux de votre Pokémon actif.",
		en: "Remove all Special Conditions from your Active Pokémon.",
		de: "Alle Speziellen Zustände auf deinen Aktiven Pokémon verlieren ihre Wirkung."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279065,
		tcgplayer: 85583
	}
}

export default card
