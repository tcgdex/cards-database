import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Level Max",
		'fr-fr': "Niveau Max",
		'de-de': "Level Max."
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon, and put it onto that Pokémon. (This counts as leveling up that Pokémon.) Shuffle your deck afterward.",
		'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck un Pokémon NIV.X qui change de niveau à partir d'1 de vos Pokémon et placez-le sur ce Pokémon. (Vous le faites ainsi passer au niveau supérieur.) Ensuite, mélangez votre deck.",
		'de-de': "Flip a coin. If heads, search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon, and put it onto that Pokémon. (This counts as leveling up that Pokémon.) Shuffle your deck afterward."
	},

	trainerType: "Item",

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86711,
				cardmarket: 278528
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278528,
				tcgplayer: 86711
			}
		}
	],

	retreat: 0
}

export default card
