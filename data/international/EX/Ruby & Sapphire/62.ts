import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [231],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Sauve qui peut",
				'de-de': "Zertrampeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Trembler",
				'fr-fr': "Tremblement de terre",
				'de-de': "Beben"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon, and each Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon Défenseur et les Paralysent.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff allen Verteidigenden Pokémon 10 Schadenspunkte zu und alle Verteidigenden Pokémon sind jetzt gelähmt."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275710,
				tcgplayer: 87996
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275710,
				tcgplayer: 87996
			}
		},
	],

}

export default card
