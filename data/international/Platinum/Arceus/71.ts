import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],
	
	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Pika Ball",
				'de-de': "Pikaball"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Shot",
				'de-de': "Megaschuss"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to Pikachu and then choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Entferne alle -Energien von Pikachu und lege sie auf deinen Ablagestapel; wähle danach 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
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
		'en-us': "It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88094,
				cardmarket: 278943
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278943,
				tcgplayer: 88094
			}
		},
	],

}

export default card
