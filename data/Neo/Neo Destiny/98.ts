import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Energy Amplifier",
		fr: "Amplificateur d'Énergie",
		de: "Energie-Verstärker"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez une carte Énergie dans votre main, montrez-la à votre adversaire et mélangez-la à votre deck. Lancez ensuite une pièce. Si c'est face, cherchez dans votre deck jusqu'à 3 cartes Énergie de base. Montrez-les à votre adversaire avant de les ajouter à votre main. Mélangez ensuite votre deck.",
		de: "Choose an Energy card in your hand, show it to your opponent, and shuffle it into your deck. Then flip a coin. If heads, search your deck for up to 3 basic Energy cards. Show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	}
}

export default card
