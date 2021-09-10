import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Ultra Ball",
		fr: "Hyper Ball",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		en: "Discard 2 cards from your hand. (If you can’t discard 2 cards, you can’t play this card.) Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward."
	},
	trainerType: "Item",

}

export default card
