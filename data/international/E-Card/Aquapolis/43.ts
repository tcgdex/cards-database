import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Vileplume",
		'fr-fr': "Rafflesia",
		'de-de': "Giflor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [45],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Scent",
				'fr-fr': "Senteur empoisonnée",
				'de-de': "Poison Scent"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné et Confus. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné et Endormi.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Addictive Pollen",
				'fr-fr': "Pollen drogué",
				'de-de': "Addictive Pollen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter pendant son prochain tour.",
				'de-de': "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90378,
				cardmarket: 275066
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90378,
				cardmarket: 275066
			}
		},
	]
}

export default card
