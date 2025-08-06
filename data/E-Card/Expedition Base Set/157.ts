import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Transfert",
		de: "Tausch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez votre Pokémon Actif contre l'un des Pokémon de votre Banc.",
		de: "Tausche dein Aktives Pokémon mit 1 der Pokémon auf der Bank aus."
	},

	thirdParty: {
		cardmarket: 275032,
		tcgplayer: 89711
	}
}

export default card
