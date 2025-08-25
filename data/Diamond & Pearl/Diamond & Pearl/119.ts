import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Échange",
		de: "Tausch"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez 1 de vos Pokémon Actifs avec 1 des Pokémon de votre Banc.",
		de: "Tausche 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277618,
		tcgplayer: 89715
	}
}

export default card
