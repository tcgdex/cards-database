import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma Conspirator",
		'fr-fr': "Conspirateur de Team Magma",
		'de-de': "Team Magma Verschwörer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 in any combination of Basic Pokémon with Team Magma in its name and basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		'fr-fr': "Cherchez dans votre deck une combinaison de 2 cartes faite de Pokémon de base dont le nom comporte Team Magma et de cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Search your deck for up to 2 in any combination of Basic Pokémon with Team Magma in its name and basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275859,
				tcgplayer: 89814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275859,
				tcgplayer: 89814
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871871,
				tcgplayer: 477447
			}
		}
	],

	retreat: 0
}

export default card
