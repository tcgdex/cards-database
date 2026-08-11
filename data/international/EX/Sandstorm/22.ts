import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'de-de': "Tengulist"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [275],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
				'de-de': "Feint Attack"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275799,
				tcgplayer: 89153
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275799,
				tcgplayer: 89153
			}
		},
	],

}

export default card
