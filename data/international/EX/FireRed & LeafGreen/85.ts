import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'de-de': "Voltobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Floating Electrons",
				'fr-fr': "Électrons flottants",
				'de-de': "Schwebende Elektronen"
			},
			effect: {
				'en-us': "As long as Voltorb has any Energy attached to it, Voltorb's Retreat Cost is 0.",
				'fr-fr': "Tant que Voltorbe possède des Énergies, son Coût de Retraite est de 0.",
				'de-de': "Wenn mindestens 1 Eneregie an Voltobal angelegt ist, hat Voltobal Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276261,
				tcgplayer: 90414
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276261,
				tcgplayer: 90414
			},
		},
	],
}

export default card
