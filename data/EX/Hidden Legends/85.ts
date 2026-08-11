import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ancient Technical Machine [Rock]",
		fr: "Machine Technique Ancienne [Pierre]",
		de: "Ancient TM (Rock)*"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Rock].",
		fr: "Attachez cette carte à 1 des Pokémon Évolués que vous avez en jeu (Pokémon-ex et Pokémon dont le nom comporte un nom de Dresseur exclus). Ce Pokémon peut utiliser l'attaque de cette carte au lieu de ses propres attaques. À la fin du tour, défaussez Machine Technique Ancienne [Pierre].",
		de: "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Rock]."
	},

	attacks: [
		{
			name: {
				en: "Stone Generator",
				de: "Stone Generator",
				fr: "Générateur de pierre"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
				de: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
				fr: "Si votre adversaire a des Pokémon Évolués en jeu, retirez à chacun de ses Pokémon la carte Évolution au niveau le plus haut et placez ces cartes dans sa main."
			},
			cost: [
				"Colorless",
			]
		},
	],

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276159,
				tcgplayer: 83554
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 276159,
				tcgplayer: 83554
			}
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 869585,
				tcgplayer: 477598
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				cardmarket: 871864,
				tcgplayer: 477364
			}
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871575,
				tcgplayer: 477495
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871574,
				tcgplayer: 477496
			}
		},
	],

}

export default card
