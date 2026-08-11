import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Magby",
		'fr-fr': "Magby",
		'de-de': "Magby"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 30,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sputter",
				'fr-fr': "Crachouilles",
				'de-de': "Stottern"
			},
			effect: {
				'en-us': "All Pokémon Powers stop working until the end of your next turn.",
				'fr-fr': "Tous les Pouvoirs Pokémon cessent de fonctionner jusqu'à la fin de votre prochain tour.",
				'de-de': "Alle Pokémon-Power funktionieren bis zum Ende deines nächsten Zuges nicht mehr."
			},
			damage: 10,

		},
	],

	description: {
		'en-us': "Each and every time it inhales and exhales, hot embers dribble out of its mouth and nostrils.",
		'fr-fr': "Chaque fois qu'il respire, des braises ardentes tombent de sa bouche et de ses narines."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274423,
				tcgplayer: 87001
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274423,
				tcgplayer: 87001
			}
		}
	]
}

export default card
