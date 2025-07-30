import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Double Full Heal",
		fr: "Double guérison totale",
		de: "Doppel Hyperheiler"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Retirez à chacun de vos Pokémon Actifs ses États Spéciaux.",
		de: "Alle speziellen Zuständen auf allen deinen Aktiven Pokémon verlieren ihre Wirkung."
	},

	thirdParty: {
		cardmarket: 275863,
		tcgplayer: 84887
	}
}

export default card
