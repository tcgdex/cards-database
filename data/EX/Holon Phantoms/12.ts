import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Latios δ",
		fr: "Latios δ",
		de: "Latios"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Aura (Duaru oora)",
				fr: "Double aura",
				de: "Doppel-Aura"
			},
			effect: {
				en: "As long as you have Latias or Latias ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.",
				fr: "Tant que vous avez Latias ou Latias ex en jeu, les Pokémon Évolués de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Bodies.",
				de: "Solange du Latias oder Latias ex im Spiel hast, können die entwickelten Pokémon beider Spieler (außer Pokémon ex) keine Poké-Body benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
				de: "Taucher"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Blast",
				fr: "Explosion aquatique",
				de: "Wasserschuss"
			},
			effect: {
				en: "Discard a Water Energy attached to Latios.",
				fr: "Défaussez une Énergie  attachée à Latios.",
				de: "Lege eine -Energiekarte, die an Latios angelegt ist, auf deinen Ablagestapel."
			},
			damage: 50,

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
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276982
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
