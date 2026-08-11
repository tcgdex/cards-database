import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Ledian",
		'fr-fr': "Coxyclaque",
		'de-de': "Ledian"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [166],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Quick Draw",
				'fr-fr': "Pioche rapide",
				'de-de': "Schnellzieher"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'de-de': "Ziehe 3 Karten."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Power et les Poké-Body ou tout autre effet en action sur le Pokémon Défenseur.",
				'de-de': "Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 40,

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "The spot patterns on its back grow larger or smaller depending on the number of stars in the night sky."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86695,
				cardmarket: 278997
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86695,
				cardmarket: 278997
			}
		},
	],

}

export default card
