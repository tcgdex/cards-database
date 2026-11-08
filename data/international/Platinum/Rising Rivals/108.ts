import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Infernape E4 LV.X",
		'fr-fr': "Simiabraz  Niv. X",
		'de-de': "Panferno 4"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [392],
	hp: 110,
	types: [
		"Fire"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Intimidating Roar",
				'fr-fr': "Rugissement intimidant",
				'de-de': "Einschüchterndes Gebrüll"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon. This power can't be used if Infernape E4 is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec 1 des Pokémon de son Banc. Ce pouvoir ne peut pas être utilisé si Simiabraz  est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank austauschen lassen. Diese Poké-Power kann nicht benutzt werden, wenn Panferno 4 von einem Speziellen Zustand betroffen ist."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme",
				'de-de': "Feuerwirbel"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Infernape E4.",
				'fr-fr': "Défaussez 2 Énergies attachées à Simiabraz .",
				'de-de': "Lege 2 an Panferno 4 angelegte Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278682,
				tcgplayer: 86280
			}
		},
	],

}

export default card
