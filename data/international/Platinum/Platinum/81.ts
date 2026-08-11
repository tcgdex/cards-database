import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'de-de': "Loturzel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [270],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Ball",
				'fr-fr': "Eco-Sphère",
				'de-de': "Energy Ball"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Lotad but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Nénupiot qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Does 10 damage plus 10 more damage for each Energy attached to Lotad but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Synthesis",
				'fr-fr': "Synthèse",
				'de-de': "Synthesis"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie Grass et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Flip a coin. If heads, search your deck for a  Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It looks like an aquatic plant and serves as a ferry to Pokémon that can't swim."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86837,
				cardmarket: 278419
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278419,
				tcgplayer: 86837
			}
		}
	],

}

export default card
