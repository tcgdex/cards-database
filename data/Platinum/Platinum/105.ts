import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cyrus's Conspiracy",
		fr: "Le complot d'Hélio",
		de: "Zyrus' Komplott"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Search your deck for a Supporter card, a basic Energy card, and a Trainer card that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	},
	trainerType: "Supporter",

}

export default card
