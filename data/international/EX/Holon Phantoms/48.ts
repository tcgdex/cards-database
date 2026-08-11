import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Persian δ",
		'fr-fr': "Persian δ",
		'de-de': "Snobilikat"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 70,

	types: [
		"Darkness",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Scratch and Draw",
				'fr-fr': "Griffer et piocher",
				'de-de': "Kratzen und Ziehen"
			},
			effect: {
				'en-us': "If any Stadium card with Holon in its name is in play, draw 3 cards.",
				'fr-fr': "Si une carte Stade dont le nom comporte Holon est en jeu, piochez 3 cartes.",
				'de-de': "Wenn sich eine Stadion-Karte mit \"Holon\" im Namen im Spiel befindet, ziehe 3 Karten."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Deceive",
				'fr-fr': "Trahison",
				'de-de': "Täuschen"
			},
			effect: {
				'en-us': "Your opponent chooses 1 of his or her Pokémon. Put 4 damage counters on that Pokémon.",
				'fr-fr': "Votre adversaire choisit 1 de ses Pokémon. Placez 4 marqueurs de dégât sur ce Pokémon.",
				'de-de': "Dein Gegner wählt 1 seiner Pokémon aus. Lege 4 Schadensmarken auf dieses Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277018
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
