import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'de-de': "Schillok"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Water Gun"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Water Energy attached to Wartortle but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Carabaffe qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Does 20 damage plus 10 more damage for each  Energy attached to Wartortle but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Turn",
				'fr-fr': "Tour fracassant",
				'de-de': "Smash Turn"
			},
			effect: {
				'en-us': "After your attack, you may switch Wartortle with 1 of your Benched Pokémon.",
				'fr-fr': "Après votre attaque, vous pouvez échanger Carabaffe avec 1 des Pokémon de votre Banc.",
				'de-de': "After your attack, you may switch Wartortle with 1 of your Benched Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276226,
				tcgplayer: 90486
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276226,
				tcgplayer: 90486
			},
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				cardmarket: 881786,
				tcgplayer: 285695
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 869514,
				tcgplayer: 477978
			},
		},
	],
}

export default card
