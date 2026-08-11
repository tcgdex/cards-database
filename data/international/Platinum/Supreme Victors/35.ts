import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Milotic C",
		'fr-fr': "Milobellus ",
		'de-de': "Milotic C"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [350],
	hp: 90,
	types: [
		"Water"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Aqua Tail",
				'fr-fr': "Hydroqueue",
				'de-de': "Nassschweif"
			},
			effect: {
				'en-us': "Flip a coin for each Water Energy attached to Milotic C. This attack does 10 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Water attachée à Milobellus . Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 1 Münze für jede an Milotic C angelegte -Energie. Dieser Angriff fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'de-de': "Wickel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278726,
				tcgplayer: 87459
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278726,
				tcgplayer: 87459
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 125074
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 125074
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 371547,
				tcgplayer: 153263
			}
		},
	],

}

export default card
