import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Nœufnœuf",
		'de-de': "Owei"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Power",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy",
				'de-de': "Psyschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its shell is very durable, allowing it to survive even if the shell becomes cracked.",
		'fr-fr': "Sa coquille est très solide. Elle lui permet de survivre même si elle est fissurée."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274716,
				tcgplayer: 85342
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274716,
				tcgplayer: 85342
			}
		}
	]
}

export default card
