import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ancient Technical Machine [Steel]",
		fr: "Machine Technique Ancienne [Acier]",
		de: "Ancient TM (Steel)*"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Steel].",
		fr: "Attachez cette carte à 1 des Pokémon Évolués que vous avez en jeu (Pokémon-ex et Pokémon dont le nom comporte un nom de Dresseur exclus). Ce Pokémon peut utiliser l'attaque de cette carte au lieu de ses propres attaques. À la fin du tour, défaussez Machine Technique Ancienne [Acier].",
		de: "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Steel]."
	},

	attacks: [
		{
			name: {
				en: "Steel Generator",
				de: "Steel Generator",
				fr: "Générateur d'acier"
			},
			effect: {
				en: "If the Defending Pokémon has a Poké-Power or Poké-Body, choose up to 2 basic Energy cards attached to 1 of your opponent's Pokémon and attach them to the Defending Pokémon.",
				de: "If the Defending Pokémon has a Poké-Power or Poké-Body, choose up to 2 basic Energy cards attached to 1 of your opponent's Pokémon and attach them to the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur possède un Poké-Power ou un Poké-Body, choisissez jusqu'à 2 cartes Énergie de base attachées à 1 des Pokémon de votre adversaire et attachez-les au Pokémon Défenseur."
			},
			cost: [
				"Colorless",
				"Colorless",
			]
		},
	],

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276160,
				tcgplayer: 83555
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 276160,
				tcgplayer: 83555
			}
		},
	],

}

export default card
