import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [405],

	hp: 120,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Luxio"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Flash",
				'de-de': "Blitz"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gadget Bolt",
				'de-de': "Zubehörschuss"
			},
			effect: {
				'en-us': "If Luxray has a Pokémon Tool card attached to it, you may do 100 damage instead of 60 to the Defending Pokémon. If you do, discard that Pokémon Tool card.",
				'de-de': "Wenn an Luxtra 1 Pokémon-Ausrüstung angelegt ist, kannst du diesen Angiff dem Verteidigenden Pokémon 100 Schadenspunkte anstelle von 60 Schadenspunkten zufügen lassen. Wenn du das machst, lege die Pokémon-Ausrüstung auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "It can see clearly through walls to track down its prey and seek its lost young."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86949,
				cardmarket: 278877
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125055
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278877,
				tcgplayer: 86949
			}
		},
	],

	retreat: 0
}

export default card
