import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Energy Amplifier",
		'fr-fr': "Amplificateur d'Énergie",
		'de-de': "Energie-Verstärker"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Choose an Energy card in your hand, show it to your opponent, and shuffle it into your deck. Then flip a coin. If heads, search your deck for up to 3 basic Energy cards. Show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		'fr-fr': "Choisissez une carte Énergie dans votre main, montrez-la à votre adversaire et mélangez-la à votre deck. Lancez ensuite une pièce. Si c'est face, cherchez dans votre deck jusqu'à 3 cartes Énergie de base. Montrez-les à votre adversaire avant de les ajouter à votre main. Mélangez ensuite votre deck.",
		'de-de': "Choose an Energy card in your hand, show it to your opponent, and shuffle it into your deck. Then flip a coin. If heads, search your deck for up to 3 basic Energy cards. Show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274750,
				tcgplayer: 85208
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274750,
				tcgplayer: 85208
			}
		}
	]
}

export default card
