import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo Niv. 22",
		'de-de': "Smogon"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [109],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Offensive Gas",
				'fr-fr': "Gaz offensif",
				'de-de': "Gasattacke"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Gas Bomb",
				'fr-fr': "Bombe à gaz",
				'de-de': "Gasbombe"
			},
			effect: {
				'en-us': "Koffing does 30 damage to itself, and don't apply Weakness and Resistance to this damage.",
				'fr-fr': "Smogo s'inflige 30 dégâts. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
				'de-de': "Smogon fügt sich selbst 30 Schadenspunkte zu, wende dabei Schwäche und Resistenz nicht an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 2,

	description: {
		'en-us': "Lighter-than-air gases in its body keep it aloft. The gases not only smell, they are also explosive."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278642,
				tcgplayer: 86497
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278642,
				tcgplayer: 86497
			}
		},
	],

}

export default card
