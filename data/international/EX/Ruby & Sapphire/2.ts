import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon",
		'de-de': "Papinella"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [267],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Withering Dust",
				'fr-fr': "Poussière desséchante",
				'de-de': "Withering Dust"
			},
			effect: {
				'en-us': "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon.",
				'fr-fr': "Tant que Charmillon est en jeu, vous ne pouvez pas appliquer la Résistance aux Pokémon Actifs.",
				'de-de': "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Poussière paralysante",
				'de-de': "Stun Spore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Parallel Gain",
				'fr-fr': "Gain parallèle",
				'de-de': "Parallel Gain"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon, including Beautifly.",
				'fr-fr': "Retirez un marqueur de dégât à tous vos Pokémon, Charmillon inclus.",
				'de-de': "Remove 1 damage counter from each of your Pokémon, including Beautifly"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275650,
				tcgplayer: 83755
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275650,
				tcgplayer: 83755
			}
		},
	],

}

export default card
