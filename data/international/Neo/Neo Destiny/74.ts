import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'fr-fr': "Demanta",
		'de-de': "Mantax"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Giant Wave",
				'fr-fr': "Vague géante",
				'de-de': "Giant Wave"
			},
			effect: {
				'en-us': "Mantine can't attack during your next turn.",
				'fr-fr': "Demanta ne peut pas attaquer pendant votre prochain tour.",
				'de-de': "Mantine can't attack during your next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "This Pokémon is perfectly adapted to its ocean home. It can gather up enough speed to burst above the water like a whale.",
		'fr-fr': "Ce Pokémon est parfaitement adapté au milieu océanique. Il peut accumuler suffisamment de vitesse pour bondir hors de l'eau comme une baleine."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274726,
				tcgplayer: 87180
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274726,
				tcgplayer: 87180
			}
		}
	]
}

export default card
