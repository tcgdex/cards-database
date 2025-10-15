import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Pokémon Reversal",
		fr: "Inversion de Pokémon",
		de: "Pokémon-Umkehrung"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon du Banc de votre adversaire et échangez-le avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
		de: "Wirf 1 Münze. Bei \"Kopf\" tausche 1 Verteidigendes Pokémon gegen 1 der Pokémon auf der Bank deines Gegners aus. Dein Gegner wählt aus, welches Verteidigende Pokémon getauscht wird."
	},

	thirdParty: {
		cardmarket: 276273
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "normal",
			stamp: ["curran-hill"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		},
	]
}

export default card
