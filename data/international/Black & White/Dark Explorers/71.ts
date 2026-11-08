import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brutal Bash",
				'fr-fr': "Ruée Brutale"
			},
			effect: {
				'en-us': "Does 20 damage times the number of Darkness Pokémon you have in play.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de Pokémon  que vous avez en jeu."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Dark Rush",
				'fr-fr': "Assaut Obscur"
			},
			effect: {
				'en-us': "Does 20 damage times the number of damage counters on this Pokémon.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents.",
	},

	thirdParty: {
		cardmarket: 280399,
		tcgplayer: 90754
	}
}

export default card
