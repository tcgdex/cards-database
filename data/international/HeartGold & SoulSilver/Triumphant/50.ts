import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [73],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tentavolve",
				'fr-fr': "Tentavolution",
				'de-de': "Tentwickel"
			},
			effect: {
				'en-us': "If Tentacruel evolved from Tentacool during this turn, the Defending Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Si Tentacruel a évolué en Tentacool pendant ce tour, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				'de-de': "Wenn sich Tentoxa in diesem Zug aus Tentacha entwickelt hat, ist das Verteidigende Pokémon jetzt gelähmt und vergiftet."
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
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf eine Münze. Lege bei \"Kopf\" eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "In battle, it extends all 80 of its tentacles to entrap its opponent inside a poisonous net."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89878,
				cardmarket: 279580
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279580,
				tcgplayer: 89878
			}
		},
	],

}

export default card
