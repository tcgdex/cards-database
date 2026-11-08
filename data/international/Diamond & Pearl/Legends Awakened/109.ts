import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'de-de': "Nasgnet"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		299,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'de-de': "Schärfer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Nose Poke",
				'fr-fr': "Coup d'nez",
				'de-de': "Nasenstüber"
			},
			effect: {
				'en-us': "If Probopass is on your Bench, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si Tarinorme se trouve sur votre Banc, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn sich Voluminas auf deiner Bank befindet, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its nose is a magnet. As a result, this Pokémon always keeps its face pointing north.",
		'fr-fr': "Son nez est un aimant, c'est pourquoi ce Pokémon fait toujours face au nord."
	},

	thirdParty: {
		cardmarket: 278258,
		tcgplayer: 87801
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
