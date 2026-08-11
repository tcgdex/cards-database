import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'de-de': "Traunfugil"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [200],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnoblast",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'de-de': "Wirf eine Münze. bei \"Kopf\" schläft das verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Gift of Spite",
				'de-de': "Boshaftes Geschenk"
			},
			effect: {
				'en-us': "Count the number of your Pokémon in play with damage counters on them. Put that many damage counters on the Defending Pokémon.",
				'de-de': "Bestimme die Anzahl an Pokémon im Spiel, auf denen Schadensmarken liegen. Lege ebenso viele Schadensmarken auf das verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87502,
				cardmarket: 275297
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87502,
				cardmarket: 275297
			},
		},
	],
}

export default card
