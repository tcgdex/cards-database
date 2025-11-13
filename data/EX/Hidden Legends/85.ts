import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ancient Technical Machine (Rock)",
		fr: "Machine Technique Ancienne [Pierre]",
		de: "Ancient TM (Rock)*"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez cette carte à 1 des Pokémon Évolués que vous avez en jeu (Pokémon-ex et Pokémon dont le nom comporte un nom de Dresseur exclus). Ce Pokémon peut utiliser l'attaque de cette carte au lieu de ses propres attaques. À la fin du tour, défaussez Machine Technique Ancienne [Pierre].",
		de: "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Rock]."
	},

	attacks: [{
		name: {
			de: "Stone Generator"
		},

		effect: {
			de: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand."
		},

		cost: ["Colorless"]
	}],

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			foil: "energy",
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		}
	]
}

export default card
