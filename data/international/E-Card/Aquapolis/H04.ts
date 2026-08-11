import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [184],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Bubble Turn",
				'fr-fr': "Tourne-bulle",
				'de-de': "Bubble Turn"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Azumarill is on your Bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si Azumarill est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, renvoyez Azumarill et toutes les cartes qui y sont attachées dans votre main.",
				'de-de': "Once during your turn (before your attack), if Azumarill is on your Bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
				'de-de': "Aqua Sonic"
			},
			effect: {
				'en-us': "Don't apply Resistance.",
				'fr-fr': "N'appliquez pas la Résistance.",
				'de-de': "Don't apply Resistance."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83681,
				cardmarket: 275076
			}
		},
	]
}

export default card
