import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'de-de': "Toxiquak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [454],
	
	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Croagunk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Corner",
				'de-de': "Bedrängen"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Convert Blow",
				'de-de': "Umwandlungsschlag"
			},
			effect: {
				'en-us': "If Toxicroak has any Psychic Energy attached to it, the Defending Pokémon is now Poisoned. If Toxicroak has any Fighting Energy attached to it, this attack does 30 damage plus 30 more damage.",
				'de-de': "Wenn an Toxiquak mindestens 1 -Energie angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet. Wenn an Toxiquak mindestens 1 -Energie angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

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
		'en-us': "It has a poison sac at its throat. When it croaks, the stored poison is churned for more potency."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90009,
				cardmarket: 278883
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278883,
				tcgplayer: 90009
			}
		},
	],

}

export default card
