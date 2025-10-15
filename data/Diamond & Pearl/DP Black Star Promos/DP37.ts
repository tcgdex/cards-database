import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
		de: "Dialga"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Time Skip",
				fr: "Bond temporel",
				de: "Zeitsprung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent flip 2 coins. If both of them are heads, your turn ends. If both of them are tails, after your opponent draws a card at the beginning of his or her next turn, his or her turn ends. This power can't be used if Dialga is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire de lancer 2 pièces. Si ce sont 2 faces, votre tour se termine. Si ce sont 2 piles, le tour de votre adversaire se termine après qu'il ou elle ait pioché une carte au début de son prochain tour. Ce pouvoir ne peut pas être utilisé si Dialga est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), kannst du deinen Gegner 2 Münzen werfen lassen. Wenn beide \"Kopf\" gezeigt haben, ist dein Zug jetzt beendet. Wenn beide \"Zahl\" gezeigt haben, endet der nächste Zug deines Gegners, nachdem er zu Beginn seines Zuges eine Karte gezogen hat. Diese Poké-Power kann nicht benutzt werden, wenn Dialga von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Flash",
				fr: "Flash métallique",
				de: "Metallblitz"
			},
			effect: {
				en: "During your next turn, Dialga can't use Metal Flash.",
				fr: "Lors de votre prochain tour, Dialga ne peut pas utiliser Flash métallique.",
				de: "Dialga kann Metallblitz in deinem nächsten Zug nicht einsetzen."
			},
			damage: 80,

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

	variants: [
		{
			type: "holo",
		}
	],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
