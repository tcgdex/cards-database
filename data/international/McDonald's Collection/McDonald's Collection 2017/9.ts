import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		50,
	],
	set: Set,
	name: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d'Alola",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Metal",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [],
			name: {
				'en-us': "Spelunk",
				'fr-fr': "Spéléologue",
			},
			effect: {
				'en-us': "Look at the top 3 cards of your deck and put them back in any order.",
				'fr-fr': "Regardez les 3 cartes du dessus de votre deck et replacez-les dans l'ordre de votre choix.",
			},
		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud'Boue",
			},
			damage: "10",
		},
	],

	illustrator: "Megumi Mizutani",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301851,
				tcgplayer: 152689
			}
		}
	]
}

export default card

