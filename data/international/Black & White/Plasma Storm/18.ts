import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Victini-EX",
		'fr-fr': "Victini-EX",
		'es-es': "Victini-EX",
		'it-it': "Victini-EX",
		'pt-br': "Victini-EX",
		'de-de': "Victini-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 110,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Turbo Energize",
				'fr-fr': "Énergisant Spontané",
			},
			effect: {
				'en-us': "Search your deck for 2 basic Energy cards and attach them to your Benched Pokémon in any way you like. Shuffle your deck afterward.",
				'fr-fr': "Cherchez 2 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon de Banc, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Intensifying Burn",
				'fr-fr': "Rage Brûlante",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
