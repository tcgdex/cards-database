import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Pokémon Rescue",
		'fr-fr': "Rescousse Pokémon",
		'de-de': "Pokémon-Rettungsaktion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your discard pile for a Pokémon, show it to your opponent, and put it into your hand.",
		'fr-fr': "Choisissez un Pokémon dans votre pile de défausse, montrez-le à votre adversaire et placez-le dans votre main.",
		'de-de': "Search your discard pile for a Pokémon, show it to your opponent, and put it into your hand."
	},

	trainerType: "Item",

	variants: [		{
			type:"normal",
			thirdParty: {
				cardmarket: 278536,
				tcgplayer: 88233
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278536,
				tcgplayer: 88233
			}
		},
		{
			type:"normal",
			stamp: ["mychael-bryan"],
			thirdParty: {
				tcgplayer: 480098
			}
		}
	],

	retreat: 0
}

export default card
