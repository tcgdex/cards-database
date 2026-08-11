import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'de-de': "Venuflibis"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [455],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Poison Breath",
				'fr-fr': "Haleine empoisonnée",
				'de-de': "Poison Breath"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sweet Saliva",
				'fr-fr': "Douce salive",
				'de-de': "Sweet Saliva"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Benched Pokémon.",
				'fr-fr': "Retirez 1 marqueur de dégât à chacun de vos Pokémon de Banc.",
				'de-de': "Remove 1 damage counter from each of your Benched Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84101,
				cardmarket: 278464
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278464,
				tcgplayer: 84101
			}
		}
	],

}

export default card
