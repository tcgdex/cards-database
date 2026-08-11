import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Sawk",
		'fr-fr': "Karaclée",
		'es-es': "Sawk",
		'it-it': "Sawk",
		'pt-br': "Sawk",
		'de-de': "Karadonis"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		539,
	],

	hp: 90,

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
				'en-us': "Kick of Righteousness",
				'fr-fr': "Coup de Pied Vertueux",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Team Plasma Pokémon, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Low Sweep",
				'fr-fr': "Balayette",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Desiring the strongest karate chop, they seclude themselves in mountains and train without sleeping.",
	},

	thirdParty: {
		cardmarket: 281073,
		tcgplayer: 88940
	}
}

export default card
