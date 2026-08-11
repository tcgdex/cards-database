import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Huntail",
		'fr-fr': "Serpang",
		'de-de': "Aalabyss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [367],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Splash",
				'fr-fr': "Éclaboussure obscure",
				'de-de': "Dark Splash"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Darkness Pokémon in play.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon  en jeu.",
				'de-de': "Does 40 damage plus 10 more damage for each  Energy in play."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86236,
				cardmarket: 276093
			}
		},
		{
			foil: 'energy',
			type: "reverse",
			thirdParty: {
				tcgplayer: 86236,
				cardmarket: 276093
			}
		},
	]
}

export default card
