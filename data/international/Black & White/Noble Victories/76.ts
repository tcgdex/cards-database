import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Finishing Blow",
				'fr-fr': "Coup de Grâce",
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Night Slash",
				'fr-fr': "Tranche-Nuit",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
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
		'en-us': "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.",
	},

	thirdParty: {
		cardmarket: 280199,
		tcgplayer: 83842
	}
}

export default card
