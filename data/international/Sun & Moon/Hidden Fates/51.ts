import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Bill’s Analysis",
		'fr-fr': "Analyse de Léo",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer jusqu’à 2 cartes Dresseur que vous y trouvez, puis les ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the top 7 cards of your deck. You may reveal up to 2 Trainer cards you find there and put them into your hand. Shuffle the other cards back into your deck."
	},
	trainerType: "Supporter",

}

export default card
