import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [77],
	
	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Star Barrier",
				'de-de': "Sternenbarriere"
			},
			effect: {
				'en-us': "As long as Ponyta has any Energy attached to it, Ponyta has no Weakness.",
				'de-de': "Solange an Ponita mindestens 1 Energie angelegt ist, hat Ponita keine Schwäche."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Blue Fire",
				'de-de': "Blaufeuer"
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to Ponyta.",
				'de-de': "Entferne alle -Energien von Ponita und lege sie auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As a newborn, it can barely stand. However, through galloping, its legs are made tougher and faster."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278869,
				tcgplayer: 88291
			}
		}
	]
}

export default card
