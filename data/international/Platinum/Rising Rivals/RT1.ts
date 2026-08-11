import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Fan Rotom",
		'fr-fr': "Motisma Hélice Niv. 46",
		'de-de': "Wirbel-Rotom"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [479],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fan Shift",
				'fr-fr': "Mutation hélice",
				'de-de': "Wirbel-Wechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Fan Rotom's type is Colorless until the end of your turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Hélice est de type Colorless jusqu'à la fin de votre tour.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Wirbel-Rotoms Typ ist  bis zum Ende des Zuges."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spin Storm",
				'fr-fr': "Orage virevoltant",
				'de-de': "Sturmwirbel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" nimmt dein Gegner das Verteidigende Pokémon und alle Karten, die an es angelegt sind, auf seine Hand zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d'Air",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy attached to Fan Rotom.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Motisma Hélice.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" entferne 1 Energie, die an Wirbel-Rotom angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278570,
				tcgplayer: 85380
			}
		},
	]
}

export default card
