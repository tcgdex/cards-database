import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'de-de': "Kleoparda"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		510,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Taunt",
				'fr-fr': "Provoc",
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sucker Punch",
				'fr-fr': "Coup Bas",
			},
			effect: {
				'en-us': "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
				'fr-fr': "Si de l'Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

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
		'en-us': "Stealthily, it sneaks up on its target, striking from behind before its victim has a chance to react.",
	},

	thirdParty: {
		cardmarket: 279805,
		tcgplayer: 86725
	}
}

export default card
