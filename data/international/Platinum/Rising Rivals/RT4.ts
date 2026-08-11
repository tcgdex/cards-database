import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Mow Rotom",
		'fr-fr': "Motisma Tonte Niv. 46",
		'de-de': "Schneid-Rotom"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [479],

	hp: 90,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Mow Shift",
				'fr-fr': "Mutation tonte",
				'de-de': "Schneid-Wechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Mow Rotom's type is Grass until the end of your turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Tonte est de type Grass jusqu'à la fin de votre tour.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Schneid-Rotoms Typ ist  bis zum Ende des Zuges."
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
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mow Down",
				'fr-fr': "Faucher",
				'de-de': "Niedermähen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to each of your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à chacun des Pokémon de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" entferne 1 Energiekarte von jedem Pokémon deines Gegners und lege sie auf seinen Ablagestapel."
			},
			damage: 50,

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
	retreat: 2,

	variants: [
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278571,
				tcgplayer: 87584
			}
		},
	]
}

export default card
