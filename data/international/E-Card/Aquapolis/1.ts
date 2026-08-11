import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'de-de': "Ampharos"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [181],

	hp: 100,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d'énergie",
				'de-de': "Energiereflektion"
			},
			effect: {
				'en-us': "If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.",
				'fr-fr': "Si vous avez des Pokémon sur votre Banc et s'il y a des cartes Énergie de base attachées à Pharamp, prenez une de ces cartes Énergie et attachez-la à l'un de ces Pokémon.",
				'de-de': "Falls du mindestens ein Pokémon auf deiner Bank hast und mindestens eine Basis-Energiekarte an Ampharos angelegt ist, nimm 1 dieser Energiekarten und lege sie an 1 dieser Pokémon an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83536,
				cardmarket: 275052
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83536,
				cardmarket: 275052
			}
		},
	]
}

export default card
