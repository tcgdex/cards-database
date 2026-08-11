import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Walrein",
		'fr-fr': "Kaimorse de Team Aqua",
		'de-de': "Team Aquas Walraisa"
	},

	illustrator: "Ken Ikuji",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [365],

	hp: 120,

	types: [
		"Water",
		"Darkness"
	],

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Power Blow",
				'fr-fr': "Coup puissant",
				'de-de': "Power Blow"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Team Aqua's Walrein.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Kaimorse de Team Aqua.",
				'de-de': "Does 10 damage plus 10 more damage for each Energy card attached to Team Aqua´s Walrain."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Reverse",
				'fr-fr': "Hydro-revers",
				'de-de': "Hydro Reverse"
			},
			effect: {
				'en-us': "You may return any number of basic Water Energy cards attached to all of your Pokémon to your hand. If you do, this attack does 50 damage plus 10 more damage for each Energy you returned.",
				'fr-fr': "Vous pouvez reprendre dans votre main autant de cartes Énergie de base  que vous le voulez. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie reprise.",
				'de-de': "You may return any number of basic  Energy card attached to all Pokémon to your hand. If you do, this attack does 50 damage plus 10 more damage for each Energy you returned."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 89803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 89803
			}
		},
	],

}

export default card
