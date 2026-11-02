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
		en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
		fr: "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon du Banc de votre adversaire et échangez-le avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
		de: "Wirf 1 Münze. Bei \"Kopf\" tausche 1 Verteidigendes Pokémon gegen 1 der Pokémon auf der Bank deines Gegners aus. Dein Gegner wählt aus, welches Verteidigende Pokémon getauscht wird."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276273,
				tcgplayer: 88239,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276273,
				tcgplayer: 88239,
			},
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				cardmarket: 871542,
				tcgplayer: 477567,
			},
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871543,
				tcgplayer: 477568,
			},
		},
	],
}

export default card
