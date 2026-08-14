import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Pinch",
				fr: "Pinces Vigoureuses",
				de: "Kraftkniff"
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 2 Münzen. Lege pro „Kopf“ 1 an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Grip and Squeeze",
				fr: "Empoigne Puissante",
				de: "Grapschen und Quetschen"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It grips prey with its pincers until the prey is torn in half. What it can't tear, it tosses far.",
		de: "Es hält seine Beute mit seiner Zange fest und teilt sie dann. Was es nicht teilen kann, wirft es fort."
	},

	thirdParty: {
		cardmarket: 280226,
		tcgplayer: 88140
	}
}

export default card
