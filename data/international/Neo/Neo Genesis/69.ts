import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 60,

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
				'en-us': "Screech",
				'fr-fr': "Grincement",
				'de-de': "Screech"
			},
			effect: {
				'en-us': "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				'fr-fr': "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires au Pokémon Défenseur.",
				'de-de': "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Rage"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Onix.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Onix.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on Onix."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It twists and squirms through the ground. The thunderous roar of its tunneling echoes a long way.",
		'fr-fr': "Il serpente et ondule à travers le sol. Le rugissement bruyant de son excavation résonne très loin."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274469,
				tcgplayer: 87875
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274469,
				tcgplayer: 87875
			}
		}
	]
}

export default card
