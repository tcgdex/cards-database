import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],

			name: {
				'en-us': "Energy Cycle",
				'fr-fr': "Cycle énergétique",
				'de-de': "Energy Cycle"
			},

			effect: {
				'en-us': "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent's Benched Pokémon. Attach that Energy card to that Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée au Pokémon Défenseur et 1 Pokémon du Banc de votre adversaire. Attachez-lui cette carte Énergie.",
				'de-de': "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent's Benched Pokémon. Attach that Energy card to that Pokémon."
			},

			damage: 10
		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Psy",
				'fr-fr': "Super psy",
				'de-de': "Super Psy"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "In South America, it is said that its right eye sees the future and its left eye views the past.",
		'fr-fr': "En Amérique du Sud, on dit que son œil droit voit l'avenir et le gauche, le passé."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274563,
				tcgplayer: 90660
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274563,
				tcgplayer: 90660
			}
		}
	]
}

export default card

