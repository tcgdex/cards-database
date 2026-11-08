import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Starmie δ",
		'fr-fr': "Staross δ",
		'de-de': "Starmie"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 60,

	types: [
		"Water",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Metal Navigation",
				'fr-fr': "Navigation métallique",
				'de-de': "Metallnavigation"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Metal Energy card and attach it to Starmie. Shuffle your deck afterward. This power can't be used if Starmie is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une carte Énergie  et l'attacher à Staross. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Staross est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer -Energiekarte durchsuchen und diese an Starmie anlegen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Starmie von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Energy Loop",
				'fr-fr': "Boucle d'énergie",
				'de-de': "Energieschleife"
			},
			effect: {
				'en-us': "Return an Energy card attached to Starmie to your hand.",
				'fr-fr': "Reprenez dans votre main une carte Énergie attachée à Staross.",
				'de-de': "Nimm eine an Starmie angelegte Energiekarte zurück auf deine Hand."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 276778
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
