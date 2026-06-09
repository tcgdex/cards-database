import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Rapidash",
		de: "Gallopa"
	},

	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],
	
	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Ponyta",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wild Guard",
				de: "Wildheitsschutz"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Rapidash by your opponent's Pokémon SP.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Gallopa von gegnerischen Pokémon SP zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Mane",
				de: "Flammenmähne"
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
				en: "Rising Lunge",
				de: "Aufwärtsstoß"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 278900,
		tcgplayer: 88585
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
