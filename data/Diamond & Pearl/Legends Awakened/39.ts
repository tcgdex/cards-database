import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Registeel",
		fr: "Registeel",
		de: "Registeel"
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
				en: "Regi Heal",
				fr: "Regi-guérison",
				de: "Regi-Heilung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 2 cards from your hand. Then, remove 3 damage counters from Registeel. This power can't be used if Registeel is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser 2 cartes de votre main. Ensuite, retirez à Registeel 3 marqueurs de dégât. Ce pouvoir ne peut pas être utilisé si Registeel est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 2 Karten von deiner Hand auf deinen Ablagestapel legen. Danach entferne 3 Schadensmarken von Registeel. Diese Poké-Power kann nicht benutzt werden, wenn Registeel von einem Speziellen Zustand betroffen ist."
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
				en: "Rotating Claws",
				fr: "Griffes tournantes",
				de: "Rotierende Klauen"
			},
			effect: {
				en: "You may discard an Energy card attached to Registeel. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Registeel.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Registeel. Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Registeel.",
				de: "Du kannst 1 Energiekarte, die an Registeel angelegt ist, auf deinen Ablagestapel legen. Wenn du das machst, durchsuche deinen Ablagestapel nach 1 Energiekarte (außer der, die du abgelegt hast) und lege sie an Registeel an."
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
		fr: "Son corps invulnérable fut forgé par la pression souterraine durant des dizaines de milliers d'années."
	},

	thirdParty: {
		cardmarket: 278188
	}
}

export default card
