import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [47],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Inducer",
				'fr-fr': "Poussododo",
				'de-de': "Sleep Inducer"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. The new Defending Pokémon is now Asleep.",
				'fr-fr': "Choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. The new Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rapture Pollen",
				'fr-fr': "Pollen d'extase",
				'de-de': "Rapture Pollen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, retirez 2 marqueurs de dégâts de Parasect.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87954,
				cardmarket: 275099
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87954,
				cardmarket: 275099
			}
		},
	]
}

export default card
