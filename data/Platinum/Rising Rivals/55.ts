import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Aerodactyl GL",
		fr: "Ptera  Niv. 62",
		de: "Aerodactyl GL"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Primal Breath",
				fr: "Haleine primale",
				de: "Urzeithauch"
			},
			effect: {
				en: "Your opponent can't play any Pokémon from his or her hand to evolve or to Level-Up the Defending Pokémon during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ou faire passer au Niveau Supérieur le Pokémon Défenseur lors de son prochain tour.",
				de: "Dein Gegner kann in seinem nächsten Zug keine Pokémon-Karten von seiner Hand spielen, um das Verteidigende Pokémon zu entwickeln oder damit ein Level-Up durchzuführen."
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
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
