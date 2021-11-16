import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ancient Tomb",
		fr: "Tombeau antique"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nVous ne pouvez pas appliquer la Faiblesse à tous les Pokémon en jeu (Pokémon-ex et Pokémon dont le nom comporte un nom de Dresseur exclus)."
	}
}

export default card
