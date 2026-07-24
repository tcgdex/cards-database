import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Master ball",
		de: "Meisterball"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,

	effect: {
		en: "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it your opponent, and put it into your hand. Shuffle the rest into your deck.",
		fr: "Regardez les 7 cartes du dessus de votre deck. Parmi ces cartes, vous pouvez choisir une carte de Pokémon de base ou d'Évolution. Montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez le reste à votre deck.",
		de: "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it your opponent, and put it into your hand. Shuffle the rest into your deck."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87252,
				cardmarket: 275018
			},
		},
		{
			type: "reverse",
		}
	],
	types: [
		"Metal"
	],
}

export default card
