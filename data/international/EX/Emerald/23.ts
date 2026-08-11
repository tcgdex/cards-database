import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camerupt",
		'de-de': "Camerupt"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra Flame",
				'fr-fr': "Flamme supplémentaire",
				'de-de': "Extra Flame"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, this attack does 20 plus 30 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Super Singe",
				'fr-fr': "Ça sent le roussi !",
				'de-de': "Super Singe"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "The Defending Pokémon is now Burned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 84090,
		cardmarket: 276534
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84090,
				cardmarket: 276534
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84090,
				cardmarket: 276534
			},
		}
	],
}

export default card
