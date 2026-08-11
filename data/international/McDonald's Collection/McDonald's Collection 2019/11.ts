import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Megumi Mizutani",
	category: "Pokemon",

	dexId: [51],

	description: {
		'en-us': "These Pokémon are cherished in the Alola region, where they are thought to be feminine deities of the land incarnate."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gold Rush"
		},

		damage: "30×",

		effect: {
			'en-us': "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way."
		}
	}],

	name: {
		'en-us': "Alolan Dugtrio"
	},

	rarity: "None",
	hp: 60,
	types: ["Metal"],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412899,
				tcgplayer: 200976
			}
		}
	]
}

export default card

