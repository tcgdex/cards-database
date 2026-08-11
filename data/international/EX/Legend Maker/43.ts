import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'de-de': "Seejong"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Spheal",
		'fr-fr': "Obalie"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Power Circulation",
				'fr-fr': "Circulation de puissance",
				'de-de': "Kraft-Kreislauf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your discard pile for a basic Energy card, show it to your opponent, and put it on top of your deck. If you do, put 1 damage counter on Sealeo. This power can't be used if Sealeo is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse une carte Énergie de base. Montrez-la à votre adversaire et placez-la dans votre deck. Placez alors un marqueur de dégât sur Phogleur. Ce pouvoir ne peut pas être utilisé si Phogleur est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) durchsuche deinen Ablagestapel nach einer Basis-Energiekarte, zeige sie deinem Gegner und lege sie auf dein Deck. Wenn du das machst, lege eine Schadensmarke auf Seejong. Diese Poké-Power kann nicht benutzt werden, wenn Seejong von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Lunge Out",
				'fr-fr': "Allonger",
				'de-de': "Sprungangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276920,
		tcgplayer: 89030
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
