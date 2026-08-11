import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'de-de': "Toxiquak"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Paralyze Poison",
				'fr-fr': "Poison paralysant",
				'de-de': "Lähmendes Gift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt und vegiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The toxin made in its poison sacs is pumped to the knuckle claws through tubes down its arms.",
	},

	thirdParty: {
		cardmarket: 278080,
		tcgplayer: 90008
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tristan-robinson"]
		}
	]
}

export default card
