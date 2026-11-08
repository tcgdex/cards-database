import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Scizor",
		'fr-fr': "Cizayox obscur",
		'de-de': "Dunkles Scherox"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Threaten",
				'fr-fr': "Menace",
				'de-de': "Threaten"
			},
			effect: {
				'en-us': "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, regardez la main de votre adversaire. S'il a des cartes Dresseur, choisissez-en une. Votre adversaire mélange cette carte à son deck.",
				'de-de': "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Nothing can withstand the pressure of the vise-like grip of this Pokémon's steel claws.",
		'fr-fr': "Rien ne peut résister à la pression des griffes d'acier de ce Pokémon, aussi puissantes qu'un étau."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274661,
				tcgplayer: 84652
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274661,
				tcgplayer: 84652
			}
		}
	]
}

export default card
