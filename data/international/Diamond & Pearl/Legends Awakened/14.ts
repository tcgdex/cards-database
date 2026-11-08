import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'de-de': "Rayquaza"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Speed Gain",
				'fr-fr': "Accélération",
				'de-de': "Tempogewinn"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin until you get tails. For each heads, search your discard pile for a basic Fire Energy card or a basic Lightning Energy card and attach it to Rayquaza. This power can't be used if Rayquaza is affected by a Special Condition or if you have another Rayquaza in play.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, cherchez dans votre pile de défausse une carte Énergie de base Fire ou une carte Énergie de base Lightning et attachez-la à Rayquaza. Ce pouvoir ne peut pas être utilisé si Rayquaza est affecté par un État Spécial ou si vous possédez un autre Rayquaza en jeu.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du so lange 1 Münze werfen, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Durchsuche pro \"Kopf\" deinen Ablagestapel nach einer - oder -Basis-Energiekarte und lege sie an Rayquaza an. Diese Poké-Power kann nicht benutzt werden, wenn Rayquaza von einem Speziellen Zustand betroffen ist oder du mehr als 1 Rayquaza im Spiel hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Sky Judgment",
				'fr-fr': "Jugement céleste",
				'de-de': "Himmelsurteil"
			},
			effect: {
				'en-us': "Discard all Energy attached to Rayquaza.",
				'fr-fr': "Défaussez toute l'Énergie attachée à Rayquaza.",
				'de-de': "Lege alle Energien, die an Rayquaza angelegt sind, auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lives in the ozone layer far above the clouds and cannot be seen from the ground.",
		'fr-fr': "Il vit dans la couche d'ozone, au-dessus des nuages. Il est invisible depuis le sol."
	},

	thirdParty: {
		cardmarket: 278163,
		tcgplayer: 88627
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
