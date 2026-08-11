import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'de-de': "Milotic"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surfer"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Hypno Wave",
				'fr-fr': "Super hypnovague",
				'de-de': "Super Hypno Welle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' schläft das Verteidigende Pokémon jetzt."
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

	thirdParty: {
		tcgplayer: 87453,
		cardmarket: 276519
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87453,
				cardmarket: 276519
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87453,
				cardmarket: 276519
			},
		},
		
	],
}

export default card
