import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Warp Point",
		fr: "Point d'échange",
		de: "Wurmloch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire échange 1 de ses Pokémon Défenseurs avec 1 des Pokémon de son Banc, s'il en a. Vous échangez 1 de vos Pokémon Actifs avec 1 des Pokémon de votre Banc, si vous en avez.",
		de: "Dein Gegner tauscht 1 seiner Verteidigenden Pokémon gegen 1 Pokémon auf seiner Bank aus. Du tauschst 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277615,
		tcgplayer: 90481
	}
}

export default card
