import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'de-de': "Absol"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Foresight",
				'fr-fr': "Prévoyance",
				'de-de': "Voraussicht"
			},
			effect: {
				'en-us': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				'fr-fr': "Regardes les 5 cartes du dessus du deck d'1 des joueurs et replacez-les au dessus du deck de ce joueur dans n'importe quel ordre.",
				'de-de': "Schau dir die obersten 5 Karten des Decks eines Spielers an und lege die Karten in beliebiger Reihenfolge auf dieses Deck zurück."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Overrun",
				'fr-fr': "Dépassement",
				'de-de': "Überrennen"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 gegnerisches Pokémon auf der Bank. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276988,
		tcgplayer: 83452
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
