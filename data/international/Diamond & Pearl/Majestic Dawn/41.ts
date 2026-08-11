import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'de-de': "Panpyro"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mid-air Strike",
				'fr-fr': "Coup en l'air",
				'de-de': "Sprunghieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		'en-us': "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
	},

	thirdParty: {
		cardmarket: 278090,
		tcgplayer: 87571
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
