import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [297],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Shove",
				'fr-fr': "Bousculer",
				'de-de': "Schubser"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slap Down",
				'fr-fr': "Écraser",
				'de-de': "Niederschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte plus 10 Schadenspunkte für jede Münze, die das Ergebnis \"Kopf\" zeigt, zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275681,
				tcgplayer: 86011
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275681,
				tcgplayer: 86011
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125143
			}
		}
	],

}

export default card
