import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		52,
	],
	set: Set,
	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d'Alola",
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
				en: "Fury Swipes",
				fr: "Combo-Griffe",
			},
			damage: "10×",
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
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
