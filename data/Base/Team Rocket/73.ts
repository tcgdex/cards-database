import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "The Boss's Way",
		fr: "À la façon du Boss",
		de: "Der Boss hat immer Recht"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for an Evolution card with Dark in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
		fr: "Cherchez dans votre deck une carte Évolution dont le nom comporte le mot \"obscur\". Montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach einer Evolutionskarte mit dem Zusatz 'Dunkles'. Zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274126,
				tcgplayer: 89894
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274126,
				tcgplayer: 89894
			}
		}
	]
}

export default card
