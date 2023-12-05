import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ancient Technical Machine (Ice)",
		fr: "Machine Technique Ancienne [Glace]",
		de: "Ancient TM (Ice)*"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez cette carte à 1 des Pokémon Évolués que vous avez en jeu (Pokémon-ex et Pokémon dont le nom comporte un nom de Dresseur exclus). Ce Pokémon peut utiliser l'attaque de cette carte au lieu de ses propres attaques. À la fin du tour, défaussez Machine Technique Ancienne [Glace].",
		de: "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Ice]."
	},

	attacks: [{
		name: {
			de: "Ice Generator"
		},

		effect: {
			de: "Discard all of your opponent's Trainer cards in play. If you do, prevent all effects, including damage, done to the Pokémon using this attack during your opponent's next turn."
		},

		cost: ["Colorless"]
	}]
}

export default card
