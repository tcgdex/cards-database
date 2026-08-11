import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua Conspirator",
		'fr-fr': "Conspirateur de Team Aqua",
		'de-de': "Team Aqua Verschwörer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 in any combination of Basic Pokémon with Team Aqua in its name and basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez dans votre deck une combinaison de 2 cartes faite de Pokémon de base dont le nom comporte Team Aqua et de cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Seach your deck for up to 2 in any combinaton of Basic Pokémon with Team Aqua in its name and basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275854,
				tcgplayer: 89770
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275854,
				tcgplayer: 89770
			}
		},
	],

	retreat: 0
}

export default card
