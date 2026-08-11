import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Team Galactic's Invention G-105 Poké Turn",
		'fr-fr': "Poké-Tour Invention G-105 de Team Galaxie",
		'de-de': "Team Galaktiks Erfindung G-105 Poké-Dreher"
	},

	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Return 1 of your Pokémon SP and all cards attached to it to your hand.",
		'fr-fr': "Reprenez dans votre main 1 de vos Pokémon SP ainsi que toutes les cartes qui lui sont attachées.",
		'de-de': "Return 1 of your Pokémon SP and all cards attached to it to your hand."
	},

	trainerType: "Item",

	variants: [		{
			type:"normal",
			thirdParty: {
				cardmarket: 278539,
				tcgplayer: 89807
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278539,
				tcgplayer: 89807
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479959
			}
		},
		{
			type:"normal",
			stamp: ["stephen-silvestro"],
			thirdParty: {
				tcgplayer: 479960
			}
		},
		{
			type:"normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				tcgplayer: 479961
			}
		},
		{
			type:"normal",
			stamp: ["mychael-bryan"],
			thirdParty: {
				tcgplayer: 480116
			}
		},
		{
			type:"normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480117
			}
		}
	],

	retreat: 0
}

export default card
