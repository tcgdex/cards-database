import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Blastoise",
		'fr-fr': "Tortank",
		'de-de': "Turtok"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [9],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'de-de': "Blubber"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Cannon",
				'fr-fr': "Double canon",
				'de-de': "Doppel-Kanone"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83889,
				cardmarket: 274879
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83889,
				cardmarket: 274879
			},
		},
	],
}

export default card
