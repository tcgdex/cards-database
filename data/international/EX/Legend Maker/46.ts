import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'de-de': "Vibrava"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei \"kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bi-Blast",
				'fr-fr': "Bi-explosion",
				'de-de': "Doppelschuss"
			},
			effect: {
				'en-us': "If Vibrava has any React Energy cards attached to it, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si Vibraninf possède des cartes Énergie réaction, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn an Vibrava mindestens eine reaktions-Energiekarte angelegt ist, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	
	resistances: [
		{
			type: "Lightning",
			value: "-30",
		},
	],
	retreat: 1,

	thirdParty: {
		cardmarket: 276923,
		tcgplayer: 90335
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
