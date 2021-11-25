import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Trainers' Mail",
		fr: "Courrier du Dresseur"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Look at the top 4 cards of your deck. You may reveal a Trainer card you find there (except for Trainers' Mail) and put it into your hand. Shuffle the other cards back into your deck.",
		fr: "Regardez les 4 cartes du dessus de votre deck. Vous pouvez montrer une carte Dresseur (à part Courrier du Dresseur) que vous y trouvez et l'ajouter à votre main. Mélangez les autres cartes avec votre deck."
	}
}

export default card
