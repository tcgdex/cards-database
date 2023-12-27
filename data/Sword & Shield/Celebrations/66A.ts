import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Shining Magikarp"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gold Scale"
		},

		effect: {
			en: "Your opponent may draw 2 cards. Either way, you may draw 2 cards."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Dragon Bond"
		},

		effect: {
			en: "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward."
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
	}
}

export default card
