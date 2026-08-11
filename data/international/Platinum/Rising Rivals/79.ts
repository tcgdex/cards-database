import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Shellos East Sea",
		'fr-fr': "Sancoki Mer Orient Niv. 21",
		'de-de': "Schalellos Östliches Meer"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [422],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ripple",
				'fr-fr': "Ondulation",
				'de-de': "Kräuseln"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put 1 damage counter on each of your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Schadensmarke auf jedes Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Brine",
				'fr-fr': "Saumure",
				'de-de': "Lake"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire qui ne possède pas de marqueurs de dégât. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Beware of pushing strongly on its squishy body, as it makes a mysterious purple fluid ooze out."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278653,
				tcgplayer: 89143
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278653,
				tcgplayer: 89143
			}
		},
	],

}

export default card
