import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Desert Ruins",
		fr: "Ruines désert",
		de: "Desert Ruins*"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nN'importe quand entre deux tours, chaque Joueur place 1 marqueur de dégât sur son Pokémon-ex possédant un maximum de Points de Vie d'au moins 100.",
		de: "At any time between turns, each player puts 1 damage counter on his or her Pokémon-ex with maximum HP of at least 100."
	},

	thirdParty: {
		cardmarket: 276162,
		tcgplayer: 84781
	}
}

export default card
