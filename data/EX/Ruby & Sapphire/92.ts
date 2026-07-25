import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Passe-passe",
		de: "Tausch"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon.",
		fr: "Échangez un de vos Pokémon Actifs contre un des Pokémon de votre Banc.",
		de: "Tausche 1 deiner Aktiven Pokémon mit 1 der Pokémon auf deiner Bank aus."
	},


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275740,
				tcgplayer: 89709
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275740,
				tcgplayer: 89709
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 560537
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				tcgplayer: 477442
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477440
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				tcgplayer: 477441
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				tcgplayer: 477443
			}
		}
	],

	retreat: 0
}

export default card
