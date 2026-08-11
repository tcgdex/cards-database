import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Aerodactyl GL",
		'fr-fr': "Ptera  Niv. 62",
		'de-de': "Aerodactyl GL"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [142],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Primal Breath",
				'fr-fr': "Haleine primale",
				'de-de': "Urzeithauch"
			},
			effect: {
				'en-us': "Your opponent can't play any Pokémon from his or her hand to Evolve or to Level-Up the Defending Pokémon during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ou faire passer au Niveau Supérieur le Pokémon Défenseur lors de son prochain tour.",
				'de-de': "Dein Gegner kann in seinem nächsten Zug keine Pokémon-Karten von seiner Hand spielen, um das Verteidigende Pokémon zu entwickeln oder damit ein Level-Up durchzuführen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278629,
				tcgplayer: 83474
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278629,
				tcgplayer: 83474
			}
		},
	],

}

export default card
