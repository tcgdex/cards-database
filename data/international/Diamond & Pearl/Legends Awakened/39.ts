import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Registeel",
		'fr-fr': "Registeel",
		'de-de': "Registeel"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		379,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Regi Heal",
				'fr-fr': "Regi-guérison",
				'de-de': "Regi-Heilung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard 2 cards from your hand. Then, remove 3 damage counters from Registeel. This power can't be used if Registeel is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser 2 cartes de votre main. Ensuite, retirez à Registeel 3 marqueurs de dégât. Ce pouvoir ne peut pas être utilisé si Registeel est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 2 Karten von deiner Hand auf deinen Ablagestapel legen. Danach entferne 3 Schadensmarken von Registeel. Diese Poké-Power kann nicht benutzt werden, wenn Registeel von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rotating Claws",
				'fr-fr': "Griffes tournantes",
				'de-de': "Rotierende Klauen"
			},
			effect: {
				'en-us': "You may discard an Energy card attached to Registeel. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Registeel.",
				'fr-fr': "Vous pouvez défausser une carte Énergie attachée à Registeel. Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Registeel.",
				'de-de': "Du kannst 1 Energiekarte, die an Registeel angelegt ist, auf deinen Ablagestapel legen. Wenn du das machst, durchsuche deinen Ablagestapel nach 1 Energiekarte (außer der, die du abgelegt hast) und lege sie an Registeel an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Tempered by pressure underground over tens of thousands of years, its body cannot be scratched.",
		'fr-fr': "Son corps invulnérable fut forgé par la pression souterraine durant des dizaines de milliers d'années."
	},

	thirdParty: {
		cardmarket: 278188,
		tcgplayer: 88677
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
