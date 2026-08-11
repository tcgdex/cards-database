import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'de-de': "Flurmel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [293],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tone-Deaf",
				'fr-fr': "Dur d'oreille",
				'de-de': "Unmusikalisch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Usually, its cries are like quiet murmurs. If frightened, it shrieks at the same volume as a jet plane."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90584,
				cardmarket: 278823
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278823,
				tcgplayer: 90584
			}
		},
	],

}

export default card
