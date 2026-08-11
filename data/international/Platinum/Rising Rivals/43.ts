import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Infernape E4",
		'fr-fr': "Simiabraz  Niv. 55",
		'de-de': "Panferno 4"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [392],
	hp: 90,
	types: [
		"Fire"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Split Bomb",
				'fr-fr': "Bombe fendante",
				'de-de': "Splitterbombe"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Pokémon. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire. Cette attaque leur inflige 20 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt den gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied voltige",
				'de-de': "Turmkick"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278617,
				tcgplayer: 86279
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278617,
				tcgplayer: 86279
			}
		},
	],

}

export default card
