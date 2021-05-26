import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Escape Rope",
		fr: "Corde Sortie"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Each player switches their Active Pokémon with 1 of their Benched Pokémon. Your opponent switches first. (If a player does not have a Benched Pokémon, they don’t switch Pokémon.)",
		fr: "Chaque joueur échange son Pokémon Actif contre l’un de ses Pokémon de Banc. Votre adversaire échange en premier. (Si l’un des joueurs n’a pas de Pokémon de Banc, il n’échange pas de Pokémon.)"
	},

	trainerType: "Item"
}

export default card