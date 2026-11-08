import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'de-de': "Wablu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Roost",
				'fr-fr': "Atterrissage",
				'de-de': "Roost"
			},
			effect: {
				'en-us': "Remove 4 damage counters from Swablu. Swablu can't retreat during your next turn.",
				'fr-fr': "Retirez à Tylton 4 marqueurs de dégât. Tylton ne peut pas battre en retraite lors de votre prochain tour.",
				'de-de': "Remove 4 damage counters from Swablu. Swablu can't retreat during your next turn."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mirror Move",
				'fr-fr': "Mimique",
				'de-de': "Mirror Move"
			},
			effect: {
				'en-us': "If Swablu was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Swablu to the Defending Pokémon.",
				'fr-fr': "Si une attaque a infligé des dégâts à Tylton lors du tour précédent de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
				'de-de': "If Swablu was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Swablu to the Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
				'de-de': "Fury Attack"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,


	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278421,
				tcgplayer: 89659
			},
		}
	]
}

export default card
