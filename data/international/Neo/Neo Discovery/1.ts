import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'de-de': "Psiana"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 80,

	types: [
		"Psychic",
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
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'de-de': "Psychic"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more for each Energy Card attached to the Defending Pokémon.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Doaes 30 damage plus 10 more damage for each Energy card attached to the Defending Pokémon."
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

	description: {
		'en-us': "It uses the fine hair that covers its body to sense air currents and predict its enemy's actions.",
		'fr-fr': "La belle fourrure qui recouvre son corps peut sentir les courants aériens et prédire les actions de son ennemi."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274512,
				tcgplayer: 85316
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274512,
				tcgplayer: 85316
			}
		}
	]

}

export default card
