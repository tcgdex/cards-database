import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Mind Jack",
				'fr-fr': "Emprise Mentale",
			},
			effect: {
				'en-us': "Does 20 more damage for each of your opponent's Benched Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fearsome Shadow",
				'fr-fr': "Ombre Redoutable",
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand.",
				'fr-fr': "Votre adversaire montre sa main.",
			},
			damage: 60,

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

	retreat: 1,

	description: {
		'en-us': "It appears from deep in the mountains to warn people about upcoming disasters it has sensed with its horn.",
	},

	thirdParty: {
		cardmarket: 280945,
		tcgplayer: 83455
	}
}

export default card
