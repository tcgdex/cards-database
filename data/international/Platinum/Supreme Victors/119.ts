import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'de-de': "Paras"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [46],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spore",
				'fr-fr': "Spore",
				'de-de': "Pilzspore"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Mushrooms named tochukaso grow on its back. They grow along with the host Paras."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87952,
				cardmarket: 278810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278729,
				tcgplayer: 87952
			}
		},
	],

}

export default card
