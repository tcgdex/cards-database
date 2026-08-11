import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Latios",
		'fr-fr': "Latios"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [381],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Draw",
				'fr-fr': "Absorption d'énergie"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie de base et attachez-la à Latios. Ensuite, mélangez votre deck."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Luster Purge",
				'fr-fr': "Lumi-Eclat"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to Latios.",
				'fr-fr': "Défaussez 3 Énergies attachée à Latios."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	description: {
		'en-us': "A highly intelligent Pokémon. By folding back its wings in flight, it can overtake jet planes.",
		'fr-fr': "Un Pokémon très intelligent. Il peut voler plus vite qu'un avion à réaction en repliant ses ailes."
	},

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86666,
				cardmarket: 278036
			},
		},
		{
			type: "holo",
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 86666,
				cardmarket: 278036
			},
		},
	],

}

export default card
