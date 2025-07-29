import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Level Max",
		fr: "Niveau Max",
		de: "Level Max."
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck un Pokémon NIV.X qui change de niveau à partir d'1 de vos Pokémon et placez-le sur ce Pokémon. (Vous le faites ainsi passer au niveau supérieur.) Ensuite, mélangez votre deck.",
		de: "Flip a coin. If heads, search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon, and put it onto that Pokémon. (This counts as leveling up that Pokémon.) Shuffle your deck afterward."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278528
	}
}

export default card
