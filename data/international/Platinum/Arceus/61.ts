import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Croagunk",
		'de-de': "Glibunkel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [453],
	
	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'de-de': "Erstauner"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'de-de': "Boxhieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It rarely fights fairly, but that is strictly to ensure survival. It is popular as a mascot."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84478,
				cardmarket: 278933
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278933,
				tcgplayer: 84478
			}
		},
	],

}

export default card
