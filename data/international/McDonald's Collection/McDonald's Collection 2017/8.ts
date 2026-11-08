import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		52,
	],
	set: Set,
	name: {
		'en-us': "Alolan Meowth",
		'fr-fr': "Miaouss d'Alola",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Darkness",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
			},
			damage: "10×",
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage for each heads",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],

	illustrator: "Kagemaru Himeno",
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301850,
				tcgplayer: 152688
			}
		}
	]
}

export default card

