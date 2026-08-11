import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Kricketune",
		'fr-fr': "Mélokrik",
		'de-de': "Zirpeise"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [402],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Entrancing Melody",
				'fr-fr': "Mélodie envoûtante",
				'de-de': "Zaubermelodie"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Fury Cutter",
				'fr-fr': "Taillade",
				'de-de': "Zornklinge"
			},
			effect: {
				'en-us': "Flip 3 coins. If 1 of them is heads, this attack does 20 damage plus 20 more damage. If 2 of them are heads, this attack does 20 damage plus 40 more damage. If all of them are heads, this attack does 20 damage plus 100 more damage.",
				'fr-fr': "Lancez 3 pièces. Si vous obtenez une fois un côté face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Si vous obtenez deux fois un côté face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Si vous obtenez chaque fois un côté face, cette attaque inflige 20 dégâts plus 100 dégâts supplémentaires.",
				'de-de': "Wirf 3 Münzen. Bei 1 Mal \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 2 Mal \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu. Bei 3 Mal \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 100 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "By allowing its cry to resonate in the hollow of its belly, it produces a captivating sound."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86534,
				cardmarket: 279554
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279554,
				tcgplayer: 86534
			}
		},
	],

}

export default card
