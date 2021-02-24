import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Aerodactyl GL",
		fr: "Ptera  Niv. 62",
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
		"Fightning",
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
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Primal Breath",
				fr: "Haleine primale",
			},
			effect: {
				en: "Your opponent can't play any Pokémon from his or her hand to evolve or to Level-Up the Defending Pokémon during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ou faire passer au Niveau Supérieur le Pokémon Défenseur lors de son prochain tour.",
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
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
