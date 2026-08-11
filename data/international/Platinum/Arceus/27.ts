import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],
	
	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Boosted Voltage",
				'de-de': "Erhöhte Spannung"
			},
			effect: {
				'en-us': "If Raichu has a Pokémon Tool card attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon that isn't an Evolved Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Wenn an Raichu mindestens 1 Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners, das kein entwickeltes Pokémon ist, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Blast",
				'de-de': "Donnerkeil"
			},
			effect: {
				'en-us': "Discard a Lightning Energy card attached to Raichu.",
				'de-de': "Entferne 1 -Energiekarte, die an Raichu angelegt ist, und lege sie auf den Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its tail discharges electricity into the ground, protecting it from getting shocked."
	},

	thirdParty: {
		cardmarket: 278899,
		tcgplayer: 88516
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88516
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88516
			}
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				tcgplayer: 221178
			}
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"],
			thirdParty: {
				tcgplayer: 221179
			}
		}
	]
}

export default card
