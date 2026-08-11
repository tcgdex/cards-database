import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'de-de': "Donphan"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [232],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'fr-fr': "Déchirer",
				'de-de': "Reißer"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any damage counters on it, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque lui inflige 40 dégâts.",
				'de-de': "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double tour",
				'de-de': "Doppeldreher"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275665,
				tcgplayer: 84871
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275665,
				tcgplayer: 84871
			}
		},
	],

}

export default card
