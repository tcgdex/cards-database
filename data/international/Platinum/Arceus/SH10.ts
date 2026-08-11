import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'de-de': "Kindwurm"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [371],
	
	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Star Barrier",
				'de-de': "Sternenbarriere"
			},
			effect: {
				'en-us': "As long as Bagon has any Energy attached to it, Bagon has no Weakness.",
				'de-de': "Solange an Kindwurm mindestens 1 Energie angelegt ist, hat Kindwurm keine Schwäche."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dragon Rage",
				'de-de': "Drachenwut"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'de-de': "Wirf 2 Münzen. Wenn mindestens eine Münze \"Zahl\" gezeigt hat, hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Dreaming of one day flying, it practices by leaping off cliffs every day."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278870,
				tcgplayer: 83700
			}
		}
	]
}

export default card
