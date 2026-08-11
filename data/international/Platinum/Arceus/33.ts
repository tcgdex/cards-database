import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [437],
	
	hp: 90,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Bronzor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Wide Laser",
				'de-de': "Streulaser"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It brought rains by opening portals to another world. It was revered as a bringer of plentiful harvests."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83996,
				cardmarket: 278886
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278886,
				tcgplayer: 83996
			}
		},
	],

}

export default card
