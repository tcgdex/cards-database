import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Mantine δ",
		fr: "Demanta δ",
		de: "Mantax"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Circulation",
				fr: "Circulation de puissance",
				de: "Kraft-Kreislauf"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card, show it to your opponent, and put it on top of your deck. If you do, put 1 damage counter on Mantine. This power can't be used if Mantine is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse une carte Énergie de base. Montrez-la à votre adversaire et placez-la au dessus de votre deck. Placez alors 1 marqueur de dégât sur Demanta. Ce pouvoir ne peut pas être utilisé si Demanta est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Ablagestapel nach einer Basis-Energiekarte durchsuchen, sie deinem Gegner zeigen und auf dein Deck legen. Wenn du das machst, lege eine Schadensmarke auf Mantax. Diese Poké-Power kann nicht benutzt werden, wenn Mantax von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Remove 1 damage counter from Mantine.",
				fr: "Retirez à Demanta 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von Mantax"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277225
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
