import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Professor Elm's Training Method",
		fr: "Méthode d'entraînement du professeur Orme",
		de: "Professor Linds Trainingsmethoden"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez une carte Évolution dans votre deck, montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach einer Entwicklungskarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach.",
	},

	thirdParty: {
		cardmarket: 275023,
		tcgplayer: 88389
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	]
}

export default card
