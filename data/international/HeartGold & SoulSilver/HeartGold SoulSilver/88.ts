import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'de-de': "Felino"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [194],

	hp: 50,

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
				'en-us': "Tail Whip",
				'fr-fr': "Mouvemend’keu",
				'de-de': "Rutenschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer durant le prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners nicht angreifen."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Watering",
				'fr-fr': "Arrosage",
				'de-de': "Gießen"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it walks around on the ground, it coats its body with a slimy, poisonous film."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90637,
				cardmarket: 279060
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90637,
				cardmarket: 279060
			}
		},
	],

}

export default card
