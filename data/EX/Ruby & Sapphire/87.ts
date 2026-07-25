import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

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
		en: "Flip a coin. If heads, your opponent switches 1 of his or her Active Pokémon with 1 of his or her Benched Pokémon.",
		fr: "Lancez une pièce. Si c'est face, votre adversaire doit échanger un de ses Pokémon Actifs contre un des Pokémon de son Banc.",
		de: "Flip a coin. If heads, your opponent switches 1 of his or her Active Pokémon with 1 of his or her Benched Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275735,
				tcgplayer: 88237
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275735,
				tcgplayer: 88237
			}
		},
		{
			type: "normal",
			stamp: ['tsuguyoshi-yamato'],
			thirdParty: {
				tcgplayer: 477415
			}
		},
		{
			type: "normal",
			stamp: ['kevin-nguyen'],
			thirdParty: {
				tcgplayer: 477416
			}
		},
	],

	retreat: 0
}

export default card
