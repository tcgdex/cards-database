import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'de-de': "Jurob"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [86],

	hp: 60,

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
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent glacé",
				'de-de': "Eissturm"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],
	retreat: 2,

	description: {
		'en-us': "A Pokémon that lives on icebergs. It swims in the sea using the point on its head to break up ice."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89054,
				cardmarket: 278816
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278816,
				tcgplayer: 89054
			}
		},
	],

}

export default card
