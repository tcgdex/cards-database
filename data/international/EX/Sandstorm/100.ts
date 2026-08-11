import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Wailord ex",
		'fr-fr': "Wailord ex",
		'de-de': "Wailord ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [321],

	hp: 200,

	stage: "Stage1",
	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Super Deep Dive",
				'fr-fr': "Super gros plongeon",
				'de-de': "Super Deep Dive"
			},
			effect: {
				'en-us': "If you don't have any Benched Pokémon, this attack does nothing. Remove 3 damage counters from Wailord ex. Switch Wailord ex with 1 of your Benched Pokémon.",
				'fr-fr': "Si vous n'avez pas de Pokémon sur votre Banc, cette attaque est sans effet. Retirez à Wailord ex trois marqueurs de dégât. Échangez Wailord ex contre un des Pokémon de votre Banc.",
				'de-de': "If you don't have any Benched Pokémon, this attack does nothing. Remove 3 damage counters from Wailord ex, Switch Wailord ex with 1 of your Benched Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague diminutrice",
				'de-de': "Dwindling Wave"
			},
			effect: {
				'en-us': "Does 100 damage minus 10 damage for each damage counter on Wailord ex.",
				'fr-fr': "Inflige 100 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Wailord ex.",
				'de-de': "Does 100 damage minus 10 damage for each damage counter on Wailord ex."
			},
			damage: "100-",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 5,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90463,
				cardmarket: 275877
			}
		},
	]
}

export default card
