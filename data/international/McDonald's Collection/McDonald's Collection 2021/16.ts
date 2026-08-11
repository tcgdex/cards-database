import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	dexId: [813],
	name: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Super Singe",
				'fr-fr': "Super Roussi",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A warm-up of running around gets fire energy coursing through this Pokémon’s body. Once that happens, it’s ready to fight at full power."
	},
	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538918,
				tcgplayer: 232341
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538933,
				tcgplayer: 232341
			}
		}
	]
}

export default card

