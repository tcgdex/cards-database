import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Heatran",
		'de-de': "Heatran"
	},

	illustrator: "Keiko Moritsugu",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [485],
	
	hp: 100,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Fang",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magma Mantle",
				'de-de': "Magmahülle"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck. This attack does 60 damage plus 20 more damage for each Fire or Metal Energy card you discarded.",
				'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 60 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise auf den Ablagestapel gelegte - oder -Energiekarte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its body is made of rugged steel. However, it is partially melted in spots because of its own heat."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86050,
				cardmarket: 278875
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278875,
				tcgplayer: 86050
			}
		},
	],

}

export default card
