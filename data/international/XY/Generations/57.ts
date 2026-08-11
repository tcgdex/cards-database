import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seething Anger",
				'fr-fr': "Furax",
			},
			effect: {
				'en-us': "Flip a coin for each damage counter on this Pokémon. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque marqueur de dégâts placé sur ce Pokémon. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "After heightening its will to fight by whipping itself with its three tails, it charges at full speed.",
	},

	thirdParty: {
		cardmarket: 288495,
		tcgplayer: 113715
	}
}

export default card
