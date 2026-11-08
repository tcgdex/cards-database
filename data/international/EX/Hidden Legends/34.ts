import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Glalie",
		'fr-fr': "Oniglali",
		'de-de': "Firnontor"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [362],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Ice Wall",
				'fr-fr': "Mur de glace",
				'de-de': "Ice Wall"
			},
			effect: {
				'en-us': "Any damage done to Glalie by attacks from your opponent's Pokémon with any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Oniglali par des attaques de Pokémon de votre adversaire possédant des Énergies Spéciales sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Glalie by attacks from your opponent's Pokémon with any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Blizzard",
				'fr-fr': "Gros blizzard",
				'de-de': "Heavy Blizzard"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur chacun des Pokémon de Banc de votre adversaire.",
				'de-de': "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85752,
				cardmarket: 276108
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85752,
				cardmarket: 276108
			}
		},
	]
}

export default card
