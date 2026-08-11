import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Lightning"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Scratch",
			fr: "Griffe"
		},
		damage: 10
	}, {
		cost: [
			"Lightning",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Pika Bolt",
			fr: "Pik'éclair"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275763,
				tcgplayer: 88079
			}
		},
	],

}

export default card
