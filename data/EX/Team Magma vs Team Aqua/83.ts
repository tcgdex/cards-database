import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma Hideout",
		fr: "Cachette de Team Magma",
		de: "Team Magmas Versteck"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nDès qu'un joueur met en jeu de sa main un Pokémon de base dont le nom ne comporte pas Team Magma, ce joueur place 1 marqueur de dégât sur ce Pokémon.",
		de: "Whenever any player plays a basic Pokémon that doesn't have Team Magma in its name from his or her hand, that player puts 1 damage counter on that Pokémon."
	}
}

export default card
