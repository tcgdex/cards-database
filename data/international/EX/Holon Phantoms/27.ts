import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Regice",
		'fr-fr': "Regice",
		'de-de': "Regice"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Clear Body",
				'fr-fr': "Corps sain",
				'de-de': "Neutraltorso"
			},
			effect: {
				'en-us': "Regice can't be affected by any Special Conditions.",
				'fr-fr': "Regice ne peut pas être affecté par des États Spéciaux.",
				'de-de': "Regice kann nicht von Speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
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
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276997,
		tcgplayer: 88656
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
