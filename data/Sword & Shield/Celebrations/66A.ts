import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		en: "Shining Magikarp",
		fr: "Magicarpe Brillant"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gold Scale",
			fr: "Écaille d'or"
		},

		effect: {
			en: "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
			fr: "Votre adversaire peut piocher 2 cartes. Quoi qu'il décide, vous pouvez aussi piocher 2 cartes."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Dragon Bond",
			fr: "Lien du Dragon"
		},

		effect: {
			en: "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte Léviator, Léviator Obscur ou Léviator Brillant dans votre deck. Montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: ""
	}],

	retreat: 1,

	description: {
		en: "An underpowered, pathetic Pokémon. It may jump high on rare occasions, but never more than seven feet."
	},

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576780
	}
}

export default card
