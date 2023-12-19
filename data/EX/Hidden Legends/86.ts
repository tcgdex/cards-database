import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ancient Technical Machine (Steel)",
		fr: "Machine Technique Ancienne [Acier]",
		de: "Ancient TM (Steel)*"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez cette carte à 1 des Pokémon Évolués que vous avez en jeu (Pokémon-ex et Pokémon dont le nom comporte un nom de Dresseur exclus). Ce Pokémon peut utiliser l'attaque de cette carte au lieu de ses propres attaques. À la fin du tour, défaussez Machine Technique Ancienne [Acier].",
		de: "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Steel]."
	},

	attacks: [{
		name: {
			de: "Steel Generator"
		},

		effect: {
			de: "If the Defending Pokémon has a Poké-Power or Poké-Body, choose up to 2 basic Energy cards attached to 1 of your opponent's Pokémon and attach them to the Defending Pokémon."
		},

		cost: ["Colorless", "Colorless"]
	}]
}

export default card
