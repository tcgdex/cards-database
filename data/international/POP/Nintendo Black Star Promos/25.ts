import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Flygon",
		'fr-fr': "Libegon"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Pit",
				'fr-fr': "Bac à sable"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragonbreath",
				'fr-fr': "Dracosouffle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, cette attaque est sans effet."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85523
			}
		},
		{
			type: 'normal',
			stamp: ['winner'],
			thirdParty: {
				tcgplayer: 228158
			}
		},
	]


}

export default card
