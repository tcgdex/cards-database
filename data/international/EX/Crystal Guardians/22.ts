import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Kingler δ",
		'fr-fr': "Krabboss δ",
		'de-de': "Kingler"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 80,

	types: [
		"Fire",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Krabby",
		'fr-fr': "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Prop-up Pinchers",
				'fr-fr': "Pinces calantes",
				'de-de': "Greifzangen"
			},
			effect: {
				'en-us': "If Kingler has a Pokémon Tool card attached to it, this attack does 40 damage plus 40 more damage.",
				'fr-fr': "Si Krabboss possède une carte Outil Pokémon, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "Wenn an Kingler eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 277103
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
