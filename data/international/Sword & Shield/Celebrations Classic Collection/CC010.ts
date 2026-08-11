import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		'en-us': "Shining Magikarp",
		'fr-fr': "Magicarpe Brillant"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gold Scale",
			'fr-fr': "Écaille d'or"
		},

		effect: {
			'en-us': "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
			'fr-fr': "Votre adversaire peut piocher 2 cartes. Quoi qu'il décide, vous pouvez aussi piocher 2 cartes."
		},

		cost: ["Water"]
	}, {
		name: {
			'en-us': "Dragon Bond",
			'fr-fr': "Lien du Dragon"
		},

		effect: {
			'en-us': "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
			'fr-fr': "Cherchez une carte Léviator, Léviator Obscur ou Léviator Brillant dans votre deck. Montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: ""
	}],

	retreat: 1,

	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may jump high on rare occasions, but never more than seven feet."
	},


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576780,
				tcgplayer: 250327
			}
		},
	],
}

export default card
