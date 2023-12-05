import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Space Center",
		fr: "Centre spatial",
		de: "Space Center*"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nNe tenez pas compte des Poké-Bodies des Pokémon de base en jeu (les vôtres et ceux de votre adversaire) (Pokémon-ex et les Pokémon dont les noms comportent les noms de leur Dresseur exclus).",
		de: "Ignore Poke-Bodies for all Basic Pokémon in play (both yours and your opponent's) (excluding Pokémon-ex and Pokémon that has an owner in its name)."
	}
}

export default card
