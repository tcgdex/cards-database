import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'de-de': "Gallopa"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Super Singe",
				'fr-fr': "Ça sent le roussi!",
				'de-de': "Super Singe"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "The Defending Pokémon is now Burned."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement",
				'de-de': "Stomp"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 276815,
		tcgplayer: 88582
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

