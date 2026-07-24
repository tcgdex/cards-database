import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Traveling Salesman",
		fr: "Représentant de commerce",
		de: "Traveling Salesman*"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 Technical Machine and/or Pokémon Tool cards, show them to your opponent, and then put them into your hand. Shuffle your deck afterward.",
		fr: "Cherchez dans votre deck jusqu'à 2 cartes Machine technique ou Outil Pokémon, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		de: "Search your deck for up to 2 Technical Machine and/or Pokémon Tool cards, show them to your opponent, and then put then into your hand. Shuffle your deck afterward."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90030,
				cardmarket: 275213
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90030,
				cardmarket: 275213
			}
		},
	]
}

export default card
