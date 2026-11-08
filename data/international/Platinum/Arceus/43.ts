import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Luxio",
		'de-de': "Luxio"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [404],
	
	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Shinx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Kick",
				'de-de': "Tritt"
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
				'en-us': "Discharge",
				'de-de': "Ladungsstoß"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to Luxio. Flip a coin for each Energy card you discarded. This attack does 40 damage times the number of heads.",
				'de-de': "Entferne alle -Energien von Luxio und lege sie auf deinen Ablagestapel. Wirf für jede auf diese Weise auf deinen Ablagestapel gelegte Energiekarte 1 Münze. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

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
		'en-us': "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86942,
				cardmarket: 278915
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278915,
				tcgplayer: 86942
			}
		},
	],

}

export default card
