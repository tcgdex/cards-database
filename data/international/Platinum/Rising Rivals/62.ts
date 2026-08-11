import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Gliscor E4",
		'fr-fr': "Scorvol  Niv. 53",
		'de-de': "Skorgo 4"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [472],
	hp: 80,
	types: [
		"Fighting"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Irongrip",
				'fr-fr': "Poigne de fer",
				'de-de': "Eiserner Griff"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Loaded Needle",
				'fr-fr': "Aiguille chargée",
				'de-de': "Geladene Nadel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 30 more damage. If tails, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278636,
				tcgplayer: 85776
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278636,
				tcgplayer: 85776
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				tcgplayer: 272510
			}
		}
	],

}

export default card
