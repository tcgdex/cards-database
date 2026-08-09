import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

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
		fr: "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon de Banc de votre adversaire et échangez-le avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
		de: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276734,
				tcgplayer: 88235,
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276734,
				tcgplayer: 88235,
			},
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				cardmarket: 869597,
				tcgplayer: 477898,
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"],
			thirdParty: {
				cardmarket: 869448,
				tcgplayer: 479714
			},
		}
	],
}

export default card
