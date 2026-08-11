import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'de-de': "Gallopa"
	},

	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [78],
	
	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Ponyta"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Wild Guard",
				'de-de': "Wildheitsschutz"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Rapidash by your opponent's Pokémon SP.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Gallopa von gegnerischen Pokémon SP zugefügt würden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fire Mane",
				'de-de': "Flammenmähne"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rising Lunge",
				'de-de': "Aufwärtsstoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88585,
				cardmarket: 278900
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278900,
				tcgplayer: 88585
			}
		},
	],

	retreat: 0
}

export default card
