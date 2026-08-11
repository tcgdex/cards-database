import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Persian δ",
		fr: "Persian δ",
		de: "Snobilikat"
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
		en: "Meowth",
		fr: "Miaouss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Scratch and Draw",
				fr: "Griffer et piocher",
				de: "Kratzen und Ziehen"
			},
			effect: {
				en: "If any Stadium card with Holon in its name is in play, draw 3 cards.",
				fr: "Si une carte Stade dont le nom comporte Holon est en jeu, piochez 3 cartes.",
				de: "Wenn sich eine Stadion-Karte mit \"Holon\" im Namen im Spiel befindet, ziehe 3 Karten."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Deceive",
				fr: "Trahison",
				de: "Täuschen"
			},
			effect: {
				en: "Your opponent chooses 1 of his or her Pokémon. Put 4 damage counters on that Pokémon.",
				fr: "Votre adversaire choisit 1 de ses Pokémon. Placez 4 marqueurs de dégât sur ce Pokémon.",
				de: "Dein Gegner wählt 1 seiner Pokémon aus. Lege 4 Schadensmarken auf dieses Pokémon."
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
