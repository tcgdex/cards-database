import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Seviper",
		'fr-fr': "Seviper",
		'de-de': "Vipitis"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		336,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercer",
				'de-de': "Pierce"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite Off",
				'fr-fr': "Arracher d'un coup de dent",
				'de-de': "Bite Off"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 89083,
		cardmarket: 276531
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89083,
				cardmarket: 276531
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89083,
				cardmarket: 276531
			},
		}
	],
}

export default card
