import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
		'de-de': "Nachtara"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
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
				"Darkness",
				"Darkness",
				"Colorless",
			],

			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
				'de-de': "Feint Attack"
			},

			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers or any other effects on the Defending Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de l'attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoirs Pokémon ou tout autre effet en action sur le Pokémon Défenseur.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack doeas 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon."
			},

			damage: "30+"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When darkness falls, the rings on the body begin to glow, striking fear in the hearts of anyone nearby.",
		'fr-fr': "Quand la nuit tombe, les anneaux de son corps se mettent à luire, éveillant la peur dans le cœur de ceux qui sont dans les parages."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90137
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274524,
				tcgplayer: 90137
			}
		}
	]
}

export default card
